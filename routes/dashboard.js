const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, use) => {
     console.log(req);
     res.sendFile(path.join(rootDir, 'views', 'dashboard.html'));
});

module.exports = router;