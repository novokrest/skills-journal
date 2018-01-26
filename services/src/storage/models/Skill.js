const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Skill = mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password') || user.isNew) {
        bcrypt.hash(user.password, 10).then(
            hash => {
                user.password = hash;
                next();
            }, 
            err => next(err)
        );
    } else {
        next();
    }
});

UserSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (error, matches) => {
        if (error) return callback(error);
        callback(null, matches);
    });
};

module.exports = UserSchema;