const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonsaiMaintenanceSchema = new Schema({
  description: {type:String, required: true},
  type: {type:String, required: true},
  periodicity: {type:Number, required: true},
  date: Date,
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const bonsaiMaintenance = mongoose.model('BonsaiMaintenance', bonsaiMaintenanceSchema);
module.exports = bonsaiMaintenance;
