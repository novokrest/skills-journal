const validator = require('./common/validator');
const response = require('./common/response');
const Log = require('@log');

class UserInfoCommand {
    constructor(User) {
        this.User = User;
    }

    execute(req, res) {
        const userName = req.user.userName;
        this.User.findOne({ userName }, (error, user) => {
            if (error) {
                Log.error(`Failed to find user: userName=${userName}, error=${error}`);
                return new response.Error(500)
            }
            if (!user) {
                Log.warning(`User was not found: userName=${req.body.userName}`);
                return new response.Fail(300, 'Failed to obtain user information: user was not found').build(res);
            }
            return new response.Success({userName: user.userName}).build(res);
        });
    }    
}

module.exports = {
    UserInfoCommand: UserInfoCommand
};
