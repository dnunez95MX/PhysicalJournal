const express = require('express');
const cors = require('cors');
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
                url: 'http://localhost:8000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerDocument(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());
app.use(express.json())

app.use('/dashboard', dashboardRoutes);
app.use('/entries', entriesRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.get404)

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})