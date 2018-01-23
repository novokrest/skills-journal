
class Success {
    constructor(payload) {
        this.payload = payload;
    }

    build(res) {
        const body = Object.assign({}, { result: this.payload } , { status: 'Success' });
        return res.status(200).json(body);
    }
}

class Fail {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    build(res) {
        return res.status(500).json({ error: { code: this.code, message: this.message } });
    }
}

module.exports = {
    Success: Success,
    Fail: Fail
};
