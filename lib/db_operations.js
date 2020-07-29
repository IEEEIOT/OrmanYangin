const mongoose = require('mongoose');
const sensor = require('../model/sensor.js');
const mes = require('../controller/mqttDataController');

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

const arama = (req, res) => {
    sensor.find().exec()
        .then((docs) => {
            res.json(docs);
        })
        .catch((err) => {
            res.json(err);
        });
};

const sonelliarama  = (req, res) => {
    sensor.find().limit(50)
        .then((docs) => {
            res.json(docs);
    }).catch((err) => {
        res.json(err);
    });;
};

const idbazlisonelliarama = (req, res) => {
    sensor.find({sensor_id : req.params.id}).limit(50)
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        res.json(err);
    });
}

const limitsayisinagorearama = (req, res) => {
    const ahmet = Number(req.params.id);
    sensor.find({}).limit(ahmet)
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        res.json(err);
    });
}

module.exports = {
    kayit,
    arama,
    sonelliarama,
    idbazlisonelliarama,
    limitsayisinagorearama
};