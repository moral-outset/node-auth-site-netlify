import { RedisOptions } from "ioredis"

const {
    REDIS_PORT = 6379,
    REDIS_HOST = 'localhost',
    REDIS_PASSWORD = 'secret' //not needed since local redis instance has no pw

} = process.env

export const REDIS_OPTIONS: RedisOptions  = {
    port: +REDIS_PORT,
    host: REDIS_HOST,

}