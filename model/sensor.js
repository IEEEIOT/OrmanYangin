const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const veriSchema = new Schema({
    sensor_id : String,
    voltage : String,
    flame : String,
    location : String,
    CO : String,
    date : Date,
    alive : Boolean
},{
    collection: 'veriler'
});

module.exports = mongoose.model('veriler',veriSchema);
