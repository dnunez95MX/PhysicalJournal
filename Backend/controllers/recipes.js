const Recipe = require("../models/recipes");

exports.addNewRecipe = (req, res, next) => {
  const recipe = new Recipe({
    name: req.body.name,
    calories: req.body.calories,
    ingredients: req.body.ingredients,
  });
  recipe
    .save()
    .then((result) => {
      res.status(201).json({ message: "entry added succesfully", result });
    })
    .catch((err) => console.log(err));
};

exports.getAllRecipesEntries = (req, res, next) => {
  Recipe.find()
    .then((entries) => {
      console.log(entries);
      res.status(200).json({ message: "entries fetched", entries });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};
