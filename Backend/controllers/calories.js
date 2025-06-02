const Calories = require("../models/calories");

exports.saveCaloriesIntake = (req, res, next) => {
  console.log(req.body.intake);
  let caloriesIntake = new Calories(req.body.intake);

  caloriesIntake.save();
  res.status(201).json({ message: "entry added succesfully", result: entry });
};
