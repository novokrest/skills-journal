const mongoose = require('mongoose');

module.exports = (dbConfig) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
  
    mongoose.connect(dbConfig.url, {
        promiseLibrary: global.Promise
    });
  
    database.on('error', error => console.log(`Connection to Mongo database failed: ${error}`));
    database.on('connected', () => console.log('Connected to Mongo database'));
    database.on('disconnected', () => console.log('Disconnected from Mongo database'));
  
    process.on('SIGINT', () => {
        database.close(() => {
            console.log('Coonection to Mongo database was closed');
            process.exit(0);
        });
    });
};
