const User = require('@storage/models').User;
const Token = require('@auth/token');
const auth = require('./auth');
const info = require('./info');

module.exports = {
    SignUpCommand: new auth.SignUpCommand(User),
    SignInCommand: new auth.SignInCommand(User, Token),
    UserInfoCommand: new info.UserInfoCommand(User)
};
