const Bonsai = require("../models/Bonsai");
const User = require('../models/User');
const Species = require("../models/Specie");

module.exports = {

  // Bonsai Controllers.
  bonsaiNewGet: (req,res) => {
    Species.find({})
    .then (species => {res.render('bonsai/new', {species, error: ''})})
    .catch (() => {res.render('bonsai/new', {error: "Couldn't charge species values"});});
  },

  bonsaiNewPost: (req,res) => {
    Species.findOne({"specie" : req.body.specie})
    .then(specie => {
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
        photo: req.file.filename,
      });
      newBonsai.save()
      .then(() => res.redirect('/profile'))
      .catch(() => res.redirect('/profile'));

  })},
  
  bonsaiCollectionGet: (req,res) => {
    User.findById(req.user._id)
    .populate('bonsais')
    .then(user => {
      res.render('bonsai/collection'), {user: user}
    })
    .catch(() => res.redirect('/profile'));
  },
};
