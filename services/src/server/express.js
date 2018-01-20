const path = require('path');
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const winston = require('express-winston');
const cors = require('cors');
const passport = require('@auth/passport');
const log = require('@log');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', { 
    stream: {
        write(message) { log.info(message) }
    }
}));
app.use(winston.logger({ winstonInstance: log, level: config.log.level }));
app.use(cors());
app.use(passport());

module.exports = app;
