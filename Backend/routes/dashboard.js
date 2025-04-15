const express = require('express');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/entry-list', dashboardController.getListEntries);

module.exports = router;