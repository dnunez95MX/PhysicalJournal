const express = require('express');

const router = express.Router();
const path = require('path')

const rootDir = require('../utils/path');

router.get("/add-entry", (req, res, next) => {
    console.log(req);
    res.sendFile(path.join(rootDir, 'views', 'add-entry.html'))
});

router.post("/add-entry", (req, res, next) => {
    console.log(req);
    res.redirect('/');
});

module.exports = router;