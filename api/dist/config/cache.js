"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_OPTIONS = void 0;
const { REDIS_PORT = 10061, REDIS_HOST = 'redis-10061.c295.ap-southeast-1-1.ec2.cloud.redislabs.com', REDIS_USERNAME = 'default', REDIS_PASSWORD = 'CYAMogRDI0UkevVmslGL9GVXaH3LpLRE' //not needed since local redis instance has no pw
 } = process.env;
exports.REDIS_OPTIONS = {
    port: +REDIS_PORT,
    host: REDIS_HOST,
    username: REDIS_USERNAME,
    password: REDIS_PASSWORD
};
