const express = require('express');
const { body } = require('express-validator')

const router = express.Router();

const entriesController = require('../controllers/entries');

router.get("/", entriesController.getAllEntries)

router.post("/add-entry", [
    body('weight').trim().isLength({min:2})
], entriesController.postAddWeightEntry);

router.get("/:entryId", entriesController.getEntryById);

router.delete("/delete/:entryId", entriesController.deleteEntryById)

module.exports = router;