require('./config');

const config = require('config');
const storage = require('@storage')(config.database);
const server = require('@server')(config.server);
