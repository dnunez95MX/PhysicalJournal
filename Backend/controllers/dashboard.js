
const rootDir = require('../utils/path');
const path = require('path');

const WeightEntry = require('../models/weightEntry');

exports.getListEntries = (req, res, use) => {
    WeightEntry.fetchAll(entries => {
        console.log(entries);
    });
    res.sendFile(path.join(rootDir, 'views', 'dashboard.html'));
}