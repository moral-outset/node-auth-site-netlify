"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.home = exports.login = exports.register = void 0;
var register_1 = require("./register");
Object.defineProperty(exports, "register", { enumerable: true, get: function () { return __importDefault(register_1).default; } });
var login_1 = require("./login");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return __importDefault(login_1).default; } });
var home_1 = require("./home");
Object.defineProperty(exports, "home", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
var users_1 = require("./users");
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
