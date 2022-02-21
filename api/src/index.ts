import mongoose from 'mongoose';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { MONGO_URI, MONGO_OPTIONS, REDIS_OPTIONS, APP_PORT } from './config';
import { createApp } from './app';

(async () => {
    //connect to mongodb database
    await mongoose.connect(MONGO_URI)
    .catch(err=>console.log(err));

    //
    let RedisStore = connectRedis(session)
    const client = new Redis(REDIS_OPTIONS)

    const store = new RedisStore({ client })

    //abstract out the app creation into another module in app.js
    const app = createApp(store)

    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
})()

