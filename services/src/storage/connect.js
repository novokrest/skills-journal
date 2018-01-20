const mongoose = require('mongoose');
const log = require('@log');

module.exports = (dbConfig) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
  
    mongoose.connect(dbConfig.url, {
        promiseLibrary: global.Promise
    });
  
    database.on('error', error => 
        log.error('Connection to Mongo database failed: url=%s, error=%s', dbConfig.url, error)
    );
    database.on('connected', 
        () => log.info('Connected to Mongo database: url=%s', dbConfig.url)
    );
    database.on('disconnected', 
        () => log.info('Disconnected from Mongo database: url=%s', dbConfig.url)
    );
  
    process.on('SIGINT', () => {
        database.close(() => {
            log.info('Connection to Mongo database was closed: url=%s', dbConfig.url);
            process.exit(0);
        });
    });
};
