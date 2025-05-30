const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const entriesController = require("../controllers/entries");

router.get("/", entriesController.getAllEntries);

router.post(
  "/add-entry",
  [body("weight").trim().isLength({ min: 2 })],
  entriesController.postAddWeightEntry
);

router.delete("/:entryId", entriesController.deleteEntryById);

router.get("/:entryId", entriesController.getEntryById);

module.exports = router;
