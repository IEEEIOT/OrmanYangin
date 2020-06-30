const express = require('express');
const router = express.Router();//

const indexController = require('../controller/indexController');
const notFoundController = require('../controller/notFoundController');
const mqttDataController = require('../controller/mqttDataController');
const mongoController = require('../controller/mongoController');

router.get('/', indexController.renderIndex);
router.post('/getData', mqttDataController.getData);
router.get('*', notFoundController.renderNotFound);

module.exports = router;