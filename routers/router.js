const express = require('express');
const router = express.Router();//

const indexController = require('../controller/indexController');
const notFoundController = require('../controller/notFoundController');
// const realtimeDataController = require('../controller/realtimeDataController');
const historyController = require('../controller/historyController');
const apiController = require('../controller/apiController');
const jwtController = require('../controller/jwtController');

router.get('/', indexController.renderIndex);
router.get('/',indexController.realtimedata);
router.get('/history', historyController.renderHistory);
// router.get('/api/',jwtController.checkAuth);
router.get('/api/data',jwtController.checkAuth,apiController.getData);
router.get('/api/number/:number',apiController.getlastXData);
router.get('/api/id/:id/number/:number', apiController.getlastxDatawithinId);
router.get('/api/yangin', apiController.getDangerData);
router.get('/api/yangin/id/:id/number/:number' , apiController.getDangerData2);
router.get('/api/send-data' , apiController.createData);
router.get('/api/delete-data', apiController.deleteData);
router.post('/api/getToken',jwtController.getToken);

module.exports = router;