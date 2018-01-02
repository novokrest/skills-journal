const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = {
    create(payload) {
        return jwt.sign(payload, config.auth.secret);
    }
};
