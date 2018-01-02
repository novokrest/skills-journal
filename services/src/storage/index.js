require('./models');
const connect = require('./connect');

module.exports = (dbConfig) => {
    connect(dbConfig);
};
