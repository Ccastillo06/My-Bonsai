const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specieSchema = new Schema({
  specie: String,
  scientific_name: String,
  decription: String,
  weather: String,
  temperature: String,
  watering: String,
  substratum: String,
  feeding: String,
});

const Specie = mongoose.model('Specie', specieSchema);
module.exports = Specie;
