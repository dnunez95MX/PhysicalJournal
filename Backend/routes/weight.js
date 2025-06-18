const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const weightEntriesController = require("../controllers/weight");

router.get("/", weightEntriesController.getAllEntries);

router.post(
  "/add-weight",
  [body("weight").trim().isLength({ min: 2 })],
  weightEntriesController.postAddWeightEntry
);

router.delete("/:entryId", weightEntriesController.deleteEntry);

router.get("/latest-entry", weightEntriesController.getLastEntry);

router.get("/:date", weightEntriesController.getWeightEntryByDate);
module.exports = router;
