const http = require('http');
const passport = require('passport');
const api = require('@api');
const log = require('@log');
const app = require('./express');

class AppServer {
    constructor(app, host, port) {
        this.app = app;
        this.host = host;
        this.port = port;
    }

    withCommand(url, command) {
        app.route(url).post((req, res) => command.execute(req, res));
        return this;
    }

    withAuthCommand(url, command) {
        app.route(url).post(
            passport.authenticate('jwt', { session: false }), 
            (req, res) => command.execute(req, res)
        );
        return this;
    }

    start() {
        http.Server(this.app).listen(
            this.port, this.host, 
            () => log.info(`Express server was started on port ${this.port}`)
        );
    }
}

module.exports = (config) => 
    new AppServer(app, config.host, config.port)
        .withCommand('/sign-up', api.SignUpCommand)
        .withCommand('/sign-in', api.SignInCommand)
        .withAuthCommand('/user/info', api.UserInfoCommand)
        .start();
