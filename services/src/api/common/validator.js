const log = require('@log');

class Headers {
    constructor(headers) {
        this.headers = headers;
    }

    validate(req) {
        return this.headers.forEach(header => !!req.get(header));
    }
}

class Body {
    constructor(template) {
        this.template = template;
    }

    validate(req) {
        const missedKeys = Object.keys(this.template).filter(key => !req.body.hasOwnProperty(key));
        if (missedKeys.length > 0) {
            log.warn('Request missed keys: missed=[%s], available=[%s]', missedKeys, Object.keys(req.body));
        }
        return (!!req.body) && (missedKeys.length == 0);
    }
}

module.exports = {
    Headers: Headers,
    Body: Body
};
