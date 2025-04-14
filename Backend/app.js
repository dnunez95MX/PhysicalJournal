const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');;

const path = require('path');

const adminRoutes = require('./routes/admin');
const entriesRoutes = require('./routes/entries');
const dashboardRoutes = require('./routes/dashboard');
const errorController = require('./controllers/errors');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Weight Tracker API',
            version: '1.0.0',
            description: 'API documentation for the Weight Tracker application',
        },
        servers: [
            {
                url: 'http://localhost:3010',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerDocument(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use('/entries', entriesRoutes);
app.use(dashboardRoutes);

app.use(errorController.get404)

app.listen(3010, () => {
    console.log('Server is running on port 3010');
})