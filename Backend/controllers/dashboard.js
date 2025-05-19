
const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.getListEntries = async (req, res, use) => {

    const response = await WeightEntry.fetchAll(entries => {
       return entries;
    });

    console.log(response)
    
    // res.status(200).json({ result : response});
    res.status(200).json({result : [
        {date: '30-02-2025', weight: '84'},
        {date: '31-02-2025', weight: '83'},
    ]})
}