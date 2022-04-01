"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.isLoggedIn = exports.logIn = void 0;
const config_1 = require("./config");
const logIn = (req, userId) => {
    req.session.userId = userId;
    req.session.createdAt = Date.now();
};
exports.logIn = logIn;
function isLoggedIn(req) {
    if (req.session.userId) {
        return true;
    }
    else {
        return false;
    }
}
exports.isLoggedIn = isLoggedIn;
const logOut = (req, res) => new Promise((resolve, reject) => {
    req.session.destroy((err) => {
        if (err)
            reject(err);
        res.clearCookie(config_1.SESSION_NAME);
        resolve();
    });
});
exports.logOut = logOut;
