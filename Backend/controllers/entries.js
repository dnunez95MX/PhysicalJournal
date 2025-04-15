const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.postAddWeightEntry = (req, res, next) => {
    console.log(req.body.weight);
    const entry = new WeightEntry(req.body.weight, req.body.date);
    entry.save();
}

exports.getAllEntries = (req, res, next) => {
    const entries = WeightEntry.fetchAll();
    console.log(req);
    res.redirect('/');
};

exports.getEntryById = (req, res, next) => {
    const entryId = req.params.entryId;
    console.log(entryId);
    let result = WeightEntry.findById(entryId);
    res.status(200).json(result);
}

exports.deleteEntryById = (req, res, next) => {
    const entryIdToDelete = req.params.entryId;
    console.log(entryIdToDelete);
}