const express = require('express');

const router = express.Router();

const entriesController = require('../controllers/entries');

router.get("/add-entry", entriesController.getAddWeightEntry);

router.post("/add-entry", entriesController.postAddWeightEntry);

router.get("/:entryId", entriesController.getEntryById);

router.delete("/delete/:entryId", entriesController.deleteEntryById)

module.exports = router;