const fs = require('fs');
const path = require('path');
const dateformat = require('dateformat');
const winston = require('winston');
const logConfig = require('config').log;

if (!fs.existsSync(logConfig.dir)) {
    fs.mkdirSync(logConfig.dir);
}

const WinstonLog = new (winston.Logger)({
    level: logConfig.level,
    transports: [
        new (winston.transports.Console)({
            timestamp: function() {
                return dateformat(Date.now());
            },

            formatter: function(options) {
                return options.timestamp() + ' ' +
                    winston.config.colorize(options.level, options.level.toUpperCase()) + ' ' +
                    (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length 
                        ? '\n\t'+ JSON.stringify(options.meta) 
                        : '');
            }
        }),
        new (winston.transports.File)({ 
            filename: path.join(logConfig.dir, logConfig.file) 
        })
    ]
});

module.exports = WinstonLog;
