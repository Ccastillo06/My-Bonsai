const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
  type: {type:String, required: true},
  periodicity: {type:Number, required: true},
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
module.exports = Maintenance;
