const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specieSchema = new Schema({
  specie: {type: String},
  scientific_name: {type: String},
  description: {type: String},
  weather: {type: String},
  temperature: {type: String},
  watering: {type: String},
  substratum: {type: String},
  feeding: {type: String},
  photo: {type: String},
  location: [{type: String}],
});

const Specie = mongoose.model('Specie', specieSchema);
module.exports = Specie;
