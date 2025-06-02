const express = require("express");
const proteinIntakeController = require("../controllers/protein");

const router = express.Router();

router.post("/", proteinIntakeController.storeProteinIntake);

module.exports = router;
