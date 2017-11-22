const Bonsai = require("../models/Bonsai");
const User = require('../models/User');
const Species = require("../models/Specie");
const Maintenance = require("../models/Maintenance");
const BonsaiMaintenance = require("../models/BonsaiMaintenance");

module.exports = {

  // Bonsai Controllers.
  bonsaiNewGet: (req,res) => {
    Species.find({})
    .then (species => {res.render('bonsai/new', {species, error: ''});})
    .catch (() => {res.render('bonsai/new', {error: "Couldn't charge species values"});});
  },

  bonsaiNewPost: (req,res) => {
    Species.findOne({"specie" : req.body.specie})
    .then(specie => {
      let photo = '';
      (req.file)? photo = req.file.filename : photo = 'bonsaiFiller.png';
      const newBonsai = new Bonsai ({
        name: req.body.name,
        species: req.body.specie,
        age: req.body.age,
        scientific_name: specie.scientific_name,
        description: specie.description,
        weather: specie.weather,
        temperature: specie.temperature,
        watering: specie.watering,
        substratum: specie.substratum,
        photo,
      });
      User.findByIdAndUpdate(
          req.user._id,
          {$push: {"bonArray": {_id: newBonsai._id}}},
          {safe: true, new : true}
        ).then(() => {
        newBonsai.save()
        .then(() => res.redirect('/profile'))
        .catch(() => res.redirect('/profile'));
      }).catch(e => {
          res.redirect('/profile');
      });
    });
  },

  bonsaiCollectionGet: (req,res) => {
    User.findOne({_id: req.user._id})
    .populate('bonArray')
    .then(user => {
      res.render('bonsai/collection', {user: user});
    })
    .catch(() => res.redirect('/profile'));
  },

  bonsaiDetailsGet: (req,res) => {
    Bonsai.findOne({_id: req.params.id})
    .populate("maintenances")
    .then(bonsai => {
      console.log (bonsai);
      res.render('bonsai/details', {bonsai});
    })
    .catch(() => res.redirect('/bonsai/collection'));
  },

  bonsaiMaintenanceGet: (req,res) => {
    Maintenance.find({})
    .then (maintenances => {res.render('bonsai/maintenance', {
      maintenances,
      id : req.params.id,
      error: ''
    });})
    .catch (() => {res.render('bonsai/maintenance', {error: "Couldn't charge maintenance types"});});
  },

  bonsaiMaintenancePost: (req,res) => {
    Maintenance.findOne({"type" : req.body.type})
    .then(type => {
      const newMaintenance = new BonsaiMaintenance ({
        description: req.body.description,
        type: type.type,
        periodicity: type.periodicity,
        date: req.body.date,
      });

      Bonsai.findByIdAndUpdate(
          req.params.id,
          {$push: {"maintenances": {_id: newMaintenance._id}}},
          {safe: true, new : true}
        ).then(() => {
        newMaintenance.save()
        .then(() => res.redirect('/bonsai/collection/'+req.params.id))
        .catch(() => res.redirect('/bonsai/collection'));
      }).catch(e => {
          res.redirect('/bonsai/collection/'+req.params.id);
      });
    });
  },
};
