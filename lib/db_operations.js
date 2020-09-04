const mongoose = require('mongoose');
const sensor = require('../model/sensor.js');
const {msg} = require('../controller/realtimeDataController');
const kayit = (msg) => {
    new sensor({
        voltage : msg.voltage,
        flame : msg.flame,
        date : msg.date,
        sensor_id : msg.id,
        alive : msg.alive,
        location : msg.location,
        yanginMi : msg.yanginMi
    }).save().then(()=>{
        console.log("Kayit Edildi.");
    }).catch(()=>{
        console.log("Kayit Hatasi");
    });
};
kayit;
const arama = (req, res) => {
    sensor.find().exec()
        .then((docs) => {
            res.json(docs);
        })
        .catch((err) => {
            res.json(err);
        });
};

const idbazlisonxarama = (req, res) => {
    const ahmet = Number(req.params.number);
    sensor.find({sensor_id : req.params.id}).limit(ahmet)
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        res.json(err);
    });
}

const limitsayisinagorearama = (req, res) => {
    const ahmet = Number(req.params.number);
    sensor.find({}).limit(ahmet)
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        res.json(err);
    });
}

const yanginarama = (req, res) => {
    if(req.params.yangin = "yangin"){
        yangin = true;
    }
    sensor.find({yanginMi : yangin}).exec()
        .then((docs) => {
            res.json(docs);
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports = {
    kayit,
    arama,
    idbazlisonxarama,
    limitsayisinagorearama,
    yanginarama
};