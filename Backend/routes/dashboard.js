const express = require('express');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/', dashboardController.getListEntries);

module.exports = router;