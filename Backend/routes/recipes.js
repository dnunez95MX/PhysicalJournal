const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const recipesController = require("../controllers/recipes");

router.get("/", recipesController.getAllRecipesEntries);

router.post(
  "/add-recipe",
  [body("calories").trim().isLength({ min: 2 })],
  recipesController.addNewRecipe
);

// router.delete("/:entryId", weightEntriesController.deleteEntryById);

// router.get("/:date", weightEntriesController.getWeightEntryByDate);

module.exports = router;
