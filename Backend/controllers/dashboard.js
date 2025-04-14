
const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.getListEntries = async (req, res, use) => {

    const response = await WeightEntry.fetchAll(entries => {
        console.log(entries);
    });
    
    res.status(200).json({ result : response});
}