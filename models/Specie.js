const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specieSchema = new Schema({
  species: {type:String, required: true},
  decription: String,
  weather: String,
  temperature: Number,
  watering: String,
  substratum: String,
});

const Specie = mongoose.model('Specie', specieSchema);
module.exports = Specie;
