require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const models = require('./models');
const routes = require('./routes');

models.sequelize.authenticate()
    .then(() => console.log("DB conectada"))
    .catch(() => console.log(error))

const app = express();
app.set('port', process.env.APP_PORT);

// eneable bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//enable cors
app.use(cors());
app.enable('trust proxy'); 

// app routes
app.use('/', routes);

// server port
app.listen(app.get('port'), () => {
    console.log(`up and runnig on port ${app.get('port')}`);
});
