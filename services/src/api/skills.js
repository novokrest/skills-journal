const validator = require('./common/validator')
const response = require('./common/response')
const log = require('@log')

class SkillListCommand {
    constructor(User) {
        this.User = User
        this.validator = new validator.Body({ title });
    }

    execute(req, res) {
        if (!this.validator.validate(req)) {
            return new response.Fail(100, 'Missing request data')
        }

        const userName = req.user.userName
        this.User.findOne({ userName }, (error, user) => {
            if (error) {
                Log.error(`Failed to find user: userName=${userName}, error=${error}`)
                return new response.Fail(500).build(res)
            }
            if (!user) {
                Log.warning(`User was not found: userName=${req.body.userName}`)
                return new response.Fail(300, 'Failed to obtain user information: user was not found').build(res)
            }
            return new response.Success({userName: user.userName}).build(res)
        })
    }
}

class AddSkillCommand {
    constructor() {

    }
}