const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonsaiSchema = new Schema({
  name: {type:String, required: true},
  species: {type:String, required: true},
  age: {type: Number, required: true},
  scientific_name: String,
  description: String,
  weather: String,
  temperature: String,
  watering: String,
  substratum: String,
  maintenances: [{type:Schema.Types.ObjectId, ref:'BonsaiMaintenance'}],
  photo: String,
});

const Bonsai = mongoose.model('Bonsai', bonsaiSchema);
module.exports = Bonsai;
