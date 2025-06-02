const express = require("express");
const { body } = require("express-validator");

const caloriesController = require("../controllers/calories");

const router = express.Router();

router.post("/", caloriesController.saveCaloriesIntake);

module.exports = router;
