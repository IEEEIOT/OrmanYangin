const express = require('express');
const router = express.Router();//

const indexController = require('../controller/indexController');
const notFoundController = require('../controller/notFoundController');
const mqttDataController = require('../controller/mqttDataController');
const historyController = require('../controller/historyController');
const wsController = require('../controller/wsController');

router.get('/', indexController.renderIndex);
// router.post('/getData', mqttDataController.getData);
// router.get('*', notFoundController.renderNotFound);
router.get('/history', historyController.renderHistory);

module.exports = router;