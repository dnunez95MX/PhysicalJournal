const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.getAddWeightEntry = (req, res, next) => {
    console.log(req);
    res.sendFile(path.join(rootDir, 'views', 'add-entry.html'));
}

exports.postAddWeightEntry = (req, res, next) => {
    console.log(req);
    const entry = new WeightEntry(req.body.weight);
    entry.save();
    res.redirect('/');
}

exports.getAllEntries = (req, res, next) => {
    const entries = WeightEntry.fetchAll();
    console.log(req);
    res.redirect('/');
};