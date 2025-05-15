const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.postAddWeightEntry = (req, res, next) => {
    console.log(req.body.weight);
    const weightEntry = req.body.weight;
    const dateEntry = new Date().toISOString()
    const entry = new WeightEntry(weightEntry, dateEntry);
    entry.save();
    res.status(201).json({result : entry})
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