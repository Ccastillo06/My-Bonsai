const Bonsai = require("../models/Bonsai");
const Species = require("../models/Specie");

module.exports = {
  // Bonsai Controllers.

  bonsaiNewGet: (req,res) => {
    Species.find({})
    .then (species => {res.render('bonsai/new', {species, error: ''})})
    .catch (() => {res.render('bonsai/new', {error: "Couldn't charge species values"})});
  },
};
