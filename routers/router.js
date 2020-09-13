const express = require('express');
const router = express.Router();//

const indexController = require('../controller/indexController');
const notFoundController = require('../controller/notFoundController');
// const realtimeDataController = require('../controller/realtimeDataController');
const historyController = require('../controller/historyController');
const apiController = require('../controller/apiController');

router.get('/', indexController.renderIndex);
router.get('/',indexController.realtimedata);
router.get('/history', historyController.renderHistory);
router.get('/api/data', apiController.getData);
router.get('/api/number/:number',apiController.getlastXData);
router.get('/api/id/:id/number/:number', apiController.getlastxDatawithinId);
router.get('/api/yangin', apiController.getDangerData);
router.get('/api/yangin/id/:id/number/:number' , apiController.getDangerData2);
router.get('/api/send-data' , apiController.createData);
router.get('/api/delete-data', apiController.deleteData);


module.exports = router;