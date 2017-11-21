const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, required: true},
  password: {type:String, required:true},
  email: {type:String, required:true},
  name: {type:String, required:true},
  location: {
    city: {type: String},
    lat: Number,
    lng: Number,
  },
  photo: String,
  bonArray: [{type:Schema.Types.ObjectId, ref:'Bonsai'}],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
