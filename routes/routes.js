//routes.js
const express = require('express');
const router = express.Router();
const monitoringController = require('../controller/controller');

router.post('/monitor', monitoringController.monitorUrl);
router.post('/stop', monitoringController.stopMonitoring);

module.exports = router;
