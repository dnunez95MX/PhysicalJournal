const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const adminRoutes = require('./routes/admin');
const entriesRoutes = require('./routes/entries');
const dashboardRoutes = require('./routes/dashboard');
const errorController = require('./controllers/errors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use('/entries', entriesRoutes);
app.use(dashboardRoutes);

app.use(errorController.get404)

app.listen(3010)