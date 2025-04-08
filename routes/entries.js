const express = require('express');

const router = express.Router();

const entriesController = require('../controllers/entries');

router.get("/add-entry", entriesController.getAddWeightEntry);

router.post("/add-entry", entriesController.postAddWeightEntry);

module.exports = router;