const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonsaiSchema = new Schema({
  name: {type:String, required: true},
  species: {type:String, required: true},
  age: {type: Number, required: true},
  decription: String,
  weather: String,
  temperature: Number,
  watering: String,
  substratum: String,
  maintenances: [{type:Schema.Type.ObjectId, ref:'Maintenance'}],
});

const Bonsai = mongoose.model('Bonsai', bonsaiSchema);
module.exports = Bonsai;
