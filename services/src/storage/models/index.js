const mongoose = require('mongoose');
const User = require('./User');

mongoose.model('User', User);

module.exports = {
    User: mongoose.model('User')
};
