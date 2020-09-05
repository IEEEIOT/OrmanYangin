const mongoose = require('mongoose');
const sensor = require('../model/sensor.js');
const kayit = (msg) => {
    new sensor({
        sensor_id : msg.sensor_id,
        voltage : msg.voltage,
        flame : msg.flame,
        location : msg.location,
        CO : msg.CO,
        date : msg.date,
        alive : msg.alive,
        yanginMi : msg.yanginMi
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
    sensor.find({yanginMi : true}).select({sensor_id : 1, location: 1, voltage: 1, flame: 1, date: 1, CO: 1}).sort('-date')
    .then((docs) => {
        res.json(docs);
    })
    .catch((err) => {
        res.json(err);
    });
}

// const yanginarama = (req, res) => {
//     sensor.deleteMany()
//     .then((docs) => {
//         res.json(docs);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// }

const idbazlisonxyanginarama = (req,res) => {
    const limit = Number(req.params.number);
    sensor.find({yanginMi : true , sensor_id : req.params.id})
    .select({sensor_id : 1, location: 1, voltage: 1, flame: 1, date: 1, CO: 1})
    .limit(limit)
    .then((docs)=>{res.json(docs);})
    .catch((err) => {res.send(err);})
}

module.exports = {
    kayit,
    arama,
    idbazlisonxarama,
    limitsayisinagorearama,
    yanginarama,
    idbazlisonxyanginarama
};