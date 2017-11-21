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

  bonsaiCollectionGet: (req,res) => {
    User.findById(req.user._id)
    .populate('bonsais')
    .then(user => {
      res.render('bonsai/collection'), {user: user}
    })
    .catch(() => res.redirect('/profile'));
  },
};
