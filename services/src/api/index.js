const User = require('@storage/models').User;
const Token = require('@auth/token');
const auth = require('./auth');
const user = require('./user');

module.exports = {
    SignUpCommand: new auth.SignUpCommand(User),
    SignInCommand: new auth.SignInCommand(User, Token),
    UserInfoCommand: new user.UserInfoCommand(User),
    UserListCommand: new user.UserListCommand(User)
};
