"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const middleware_1 = require("./middleware");
const cors_1 = __importDefault(require("cors"));
const createApp = (store) => {
    const app = (0, express_1.default)();
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', '*')
    //     res.header('Access-Control-Allow-Credentials', 'true');
    //     if (req.method === 'OPTIONS') {
    //         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    //         return res.status(200).json({});
    //     }
    //     next();
    // })
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie'],
        credentials: true,
    }));
    app.use(express_1.default.json());
    app.use((0, express_session_1.default)({
        ...config_1.SESSION_OPTIONS,
        store
    }));
    app.use((0, middleware_1.catchAsync)(middleware_1.active));
    app.use(routes_1.users);
    app.use(routes_1.home);
    app.use(routes_1.login);
    app.use(routes_1.register);
    app.use(middleware_1.notFound);
    app.use(middleware_1.internalServerError);
    return app;
};
exports.createApp = createApp;
