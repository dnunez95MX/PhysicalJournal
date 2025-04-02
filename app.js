const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use(dashboardRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3010)