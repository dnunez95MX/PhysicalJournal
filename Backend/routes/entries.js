const express = require('express');

const router = express.Router();

const entriesController = require('../controllers/entries');

router.post("/", entriesController.postAddWeightEntry);

router.get("/:entryId", entriesController.getEntryById);

router.delete("/delete/:entryId", entriesController.deleteEntryById)

module.exports = router;