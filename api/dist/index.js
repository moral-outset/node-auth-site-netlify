"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = require("./config");
const app_1 = require("./app");
(async () => {
    //connect to mongodb database
    await mongoose_1.default.connect(config_1.MONGO_URI)
        .catch(err => console.log(err));
    //
    let RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const client = new ioredis_1.default(config_1.REDIS_OPTIONS);
    const store = new RedisStore({ client });
    //abstract out the app creation into another module in app.js
    const app = (0, app_1.createApp)(store);
    app.listen(process.env.PORT || config_1.APP_PORT, () => console.log(`http://localhost:${config_1.APP_PORT}`));
})();
