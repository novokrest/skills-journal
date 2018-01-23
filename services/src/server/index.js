const http = require('http');
const passport = require('passport');
const api = require('@api');
const log = require('@log');
const app = require('./express');

class AppServer {
    constructor(app, host, port, basePath) {
        this.app = app;
        this.host = host;
        this.port = port;
        this.basePath = basePath;
    }

    withPostCommand(url, command) {
        app.route(this._buildUrl(url)).post((req, res) => command.execute(req, res));
        return this;
    }

    withAuthPostCommand(url, command) {
        app.route(this._buildUrl(url)).post(
            passport.authenticate('jwt', { session: false }), 
            (req, res) => command.execute(req, res)
        );
        return this;
    }

    withAuthGetCommand(url, command) {
        app.route(this._buildUrl(url)).get(
            passport.authenticate('jwt', { session: false }), 
            (req, res) => command.execute(req, res)
        );
        return this;
    }

    _buildUrl(url) {
        return this.basePath + url;
    }

    start() {
        http.Server(this.app).listen(
            this.port, this.host, 
            () => log.info(`Express server was started on port ${this.port}`)
        );
    }
}

module.exports = (config) => 
    new AppServer(app, config.host, config.port, config.basePath)
        .withPostCommand('/sign-up', api.SignUpCommand)
        .withPostCommand('/sign-in', api.SignInCommand)
        .withAuthPostCommand('/user/info', api.UserInfoCommand)
        .withAuthGetCommand('/user/list', api.UserListCommand)
        .start();
