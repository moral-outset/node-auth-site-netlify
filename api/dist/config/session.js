"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_OPTIONS = exports.SESSION_ASOLUTE_TIMEOUT = exports.SESSION_IDLE_TIMEOUT = exports.SESSION_NAME = exports.SESSION_SECRET = void 0;
const ONE_HOUR = 1000 * 60 * 60;
const HALF_HOUR = ONE_HOUR / 2;
const SIX_HOURS = ONE_HOUR * 6;
_a = process.env, _b = _a.SESSION_SECRET, exports.SESSION_SECRET = _b === void 0 ? `password` : _b, _c = _a.SESSION_NAME, exports.SESSION_NAME = _c === void 0 ? `sid` : _c, _d = _a.SESSION_IDLE_TIMEOUT, exports.SESSION_IDLE_TIMEOUT = _d === void 0 ? HALF_HOUR : _d;
//+() casts to an integer
//forces user to relogin after 6 hours max
exports.SESSION_ASOLUTE_TIMEOUT = +(process.env.SESSION_ASOLUTE_TIMEOUT || SIX_HOURS);
exports.SESSION_OPTIONS = {
    secret: exports.SESSION_SECRET,
    name: exports.SESSION_NAME,
    cookie: {
        maxAge: +exports.SESSION_IDLE_TIMEOUT,
        secure: false,
        sameSite: 'lax',
        httpOnly: false, //allows you to access cookies with JS!
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
};
