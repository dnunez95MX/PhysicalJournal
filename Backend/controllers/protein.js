const Protein = require("../models/protein");

exports.storeProteinIntake = (req, res, next) => {
  console.log(req.body.protein);
  const Protein = new Protein(req.body.protien);
  Protein.save();

  res.status(201).json({ message: "entry added succesfully", result: entry });
};
