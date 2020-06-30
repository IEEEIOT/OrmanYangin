const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const veriSchema = new Schema({
    sensor : String,
    voltage : String,
    flame : String,
    location : String,
    CO : String,
    date : Date
},{
    collection: 'veriler'
});

module.exports = mongoose.model('Model',veriSchema);
