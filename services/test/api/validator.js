const assert = require('assert');
const Body = require('../../src/api/validator').Body;

describe('Validator', () => {
    describe('Body', () => {
        it ('successfull validation', () => {
            const template = {prop1: '', prop2: ''};
            const validator = new Body(template);

            const result = validator.validate(Object.assign({}, {body: template}));

            assert.ok(result);
        });
    });
});