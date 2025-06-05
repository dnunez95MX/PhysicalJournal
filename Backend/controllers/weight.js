const rootDir = require("../utils/path");
const path = require("path");

const { validationResult } = require("express-validator");

// const WeightEntry = require("../models/weightEntry");
// const Entry = require("../models/Entry");
const Weight = require("../models/weight");

exports.postAddWeightEntry = (req, res, next) => {
  console.log(req.body.weight);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: "validation failed" });
  }

  const weight = new Weight({ weight: req.body.weight, date: Date.now() });
  weight
    .save()
    .then((result) => {
      res.status(201).json({ message: "entry added succesfully", result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllEntries = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const itemsPerPage = req.query.itemsPerPage || 5;

  let totalItems;

  Weight.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Weight.find()
        .skip((currentPage - 1) * itemsPerPage)
        .limit(itemsPerPage);
    })
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

  // Entry.fetchAll()
  //   .countDocuments()
  //   .then((count) => {
  //     totalItems = count;
  //     return WeightEntry.fetchAll()
  //       .skip((currentPage - 1) * itemsPerPage)
  //       .limit(itemsPerPage);
  //   })

  // Entry.fetchAll()
  //   .then((entries) => {
  //     console.log(entries);
  //     res.status(200).json({ message: "entries fetched", entries });
  //   })
  //   .catch((err) => {
  //     if (!err.statusCode) {
  //       err.statusCode = 500;
  //     }

  //     next(err);
  //   });
};

exports.getWeightEntryByDate = (req, res, next) => {
  const weightDate = new Date(req.params.date);
  let entryDate = new Date(weightDate.setHours(2, 0, 0));
  Weight.findOne({
    date: {
      $gte: new Date(entryDate), // Inicio del día (00:00:00)
      $lt: new Date(weightDate.setHours(23, 59, 59)), // Fin del día (23:59:59)
    },
  })
    .then((entry) => {
      if (!entry) {
        return res.redirect("/weight");
      }
      res.status(200).json({ message: "entry fetched", entry });
    })
    .catch((err) => console.log(err));

  // Entry.findById(entryId)
  //   .then((entry) => {
  //     if (!entry) {
  //       const error = new Error("Could not find entry");
  //       error.statusCode = 404;
  //       throw error;
  //     }

  //     res.status(200).json({ message: "Entry fetched", entry: entry });
  //   })
  //   .catch((err) => {
  //     if (!err.statusCode) {
  //       err.statusCode = 500;
  //     }
  //     next(err);
  //   });
};

exports.deleteEntryById = (req, res, next) => {
  const entryIdToDelete = req.params.entryId;
  Entry.deleteEntryById(entryIdToDelete)
    .then((entry) => {
      if (!entry) {
        const error = new Error("Could not find entry");
        error.statusCode = 404;
        throw error;
      }
      res
        .status(204)
        .json({ message: `Entry with id: ${entry.id} succesfully deleted` });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  console.log(entryIdToDelete);
};
