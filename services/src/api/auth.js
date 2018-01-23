const validator = require('./common/validator');
const response = require('./common/response');
const log = require('@log');

class SignUpCommand {
    constructor(User) {
        this.User = User;
        this.validator = new validator.Body({ userName: '', password: '' })
    }

    execute(req, res) {
        if (!this.validator.validate(req)) {
            return new response.Fail(100, 'Both user name and password must be provided').build(res);
        }

        const user = new this.User({
            userName: req.body.userName,
            password: req.body.password
        });

        user.save(error => {
            if (error) {
                log.error(`Failed to save new user: userName=${user.userName}, error=${error}`);
                return new response.Fail(500, 'DB Error').build(res);
            }
            log.info('User was saved successfully: userName=%s', user.userName);
            return new response.Success({userName: user.userName}).build(res);
        });
    }
}

class SignInCommand {
    constructor(User, Token) {
        this.User = User;
        this.Token = Token;
        this.validator = new validator.Body({ userName: '', password: '' });
    }

    execute(req, res) {
        if (!this.validator.validate(req)) {
            return new response.Fail(100, 'Both user name and password must be provided').build(res);
        }

        this.User.findOne({ userName: req.body.userName }, (error, user) => {
            if (error) {
                log.error(`Failed to find user: userName=${req.body.userName}, error=${error}`);
                return new response.Fail(500, 'DB Error').build(res);
            }
            if (!user) {
                log.warning(`User was not found: userName=${req.body.userName}`);
                return new response.Fail(300, 'Authentication failed: user was not found').build(res);
            }
            user.comparePassword(req.body.password, (error, matches) => {
                if (!error && matches) {
                    const token = this.Token.create({ user });
                    log.info('User was authenticated successfully: userName=%s', user.userName)
                    return new response.Success({ userName: user.userName, token: token }).build(res);
                }
                log.warning('User was not authenticated: incorrect password=%s', req.body.password);
                return new response.Fail(401, 'Authentication failed: incorrect password').build(res);
            });
        });
    }
}

module.exports = {
    SignUpCommand: SignUpCommand,
    SignInCommand: SignInCommand
};
