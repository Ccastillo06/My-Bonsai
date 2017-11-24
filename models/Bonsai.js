const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonsaiSchema = new Schema({
  name: {type:String, required: true},
  species: {type:String, required: true},
  age: {type: Number, required: true},
  scientific_name: {type: String},
  description: {type: String},
  weather: {type: String},
  temperature: {type: String},
  watering: {type: String},
  substratum: {type: String},
  maintenances: [{type:Schema.Types.ObjectId, ref:'BonsaiMaintenance'}],
  photo: {type: String},
});

const Bonsai = mongoose.model('Bonsai', bonsaiSchema);
module.exports = Bonsai;
