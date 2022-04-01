"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.MONGO_OPTIONS = void 0;
const dbInfo_1 = require("./dbInfo");
const { MONGO_USERNAME = dbInfo_1.MONGOUSERNAME, MONGO_PASSWORD = dbInfo_1.MONGOPASSWORD, MONGO_HOST = 'localhost', MONGO_PORT = 27017, MONGO_DATABASE = 'auth' } = process.env;
exports.MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
exports.MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@cluster0.oidd8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
