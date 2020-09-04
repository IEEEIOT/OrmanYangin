const express = require('express');
const router = express.Router();//

const indexController = require('../controller/indexController');
const notFoundController = require('../controller/notFoundController');
const realtimeDataController = require('../controller/realtimeDataController');
const historyController = require('../controller/historyController');
const apiController = require('../controller/apiController');

router.get('/', indexController.renderIndex);
router.get('/history', historyController.renderHistory);
router.get('/api/data', apiController.getData);
router.get('/api/:number',apiController.getlastXData);
router.get('/api/:id/:number', apiController.getlastxDatawithinId);
router.get('/api/:yangin', apiController.getLastDangerData);

module.exports = router;