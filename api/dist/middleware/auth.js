"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.active = exports.auth = exports.guest = void 0;
const auth_1 = require("../auth");
const config_1 = require("../config");
const errors_1 = require("../errors");
const guest = (req, res, next) => {
    if ((0, auth_1.isLoggedIn)(req)) {
        return next(new errors_1.Unauthorized('You are already logged in!'));
    }
    next();
};
exports.guest = guest;
const auth = (req, res, next) => {
    if (!(0, auth_1.isLoggedIn)(req)) {
        return next(new errors_1.Unauthorized('You must be logged in!'));
    }
    next();
};
exports.auth = auth;
const active = async (req, res, next) => {
    if ((0, auth_1.isLoggedIn)(req)) {
        const now = Date.now();
        //createdAt could be undefined if you didnt call app.use(session) at app.ts
        const { createdAt } = req.session;
        if (now > createdAt + config_1.SESSION_ASOLUTE_TIMEOUT) {
            await (0, auth_1.logOut)(req, res);
            return next(new errors_1.Unauthorized('Session expired'));
        }
    }
    next();
};
exports.active = active;
