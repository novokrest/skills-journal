const config = require('config');
const passport = require('passport');
const User = require('@storage/models').User;
const PassportJWT = require('passport-jwt'),
      ExtractJWT = PassportJWT.ExtractJwt,
      Strategy = PassportJWT.Strategy;

const parameters = {
    secretOrKey: config.auth.secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(parameters, (payload, done) => {
    User.findOne({ id: payload.id }, (error, user) => {
        if (error) {
            return done(error, false);
        }
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    });
});

module.exports = () => {
    passport.use(strategy);
    return passport.initialize();
};
