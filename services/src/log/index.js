const fs = require('fs');
const config = require('config').log;
const log = require('log');
const winston = require('winston');

const WinstonLog = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: config.file })
    ]
});

const Log = new log(config.level, fs.createWriteStream(config.file));

module.exports = Log;
