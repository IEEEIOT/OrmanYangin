const mongoose = require('mongoose');
const sensor = require('../model/sensor.js');
const mqtt = require('../controller/mqttDataController').getData();

const mes = JSON.parse.getData();

const kayit = () => {
    new sensor({
        voltage : mes.voltage,
        flame : mes.flame,
        date : mes.date,
        sensor_id : mes.id,
        alive : mes.alive,
        location : mes.location
    }).save().then(()=>{
        console.log("Kayit Edildi.");
    }).catch(()=>{
        console.log("Kayit Hatasi");
    });
};

const arama = sensor.find()
    .then((docs) => {
        return docs;
    });

const sonelliarama = sensor.find().limit(50)
        .then((docs) => {
            return docs;
    });

const idbazlisonelliarama = (id) => {
    sensor.find({sensor_id : id}).limit(50)
    .then((docs) => {
        return docs;
    });
}

module.exports = {
    kayit,
    arama,
    sonelliarama,
    idbazlisonelliarama,
};