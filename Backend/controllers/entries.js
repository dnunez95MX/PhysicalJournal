const rootDir = require('../utils/path');
const path = require('path');

const { validationResult } = require('express-validator')

const WeightEntry = require('../models/weightEntry');

exports.postAddWeightEntry = (req, res, next) => {
    console.log(req.body.weight);
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ message : 'validation failed'})
    }
    const weightEntry = req.body.weight;
    const dateEntry = new Date().toISOString()
    const entry = new WeightEntry(weightEntry, dateEntry);
    entry.save();
    res.status(201).json({message : 'entry added succesfully', result : entry})
}

exports.getAllEntries = (req, res, next) => {
    let entries = WeightEntry.fetchAll();
    console.log(entries);
    res.status(200).json(entries);
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