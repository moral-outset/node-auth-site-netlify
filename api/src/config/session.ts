import { SessionOptions } from 'express-session'

const ONE_HOUR=1000*60*60;

const HALF_HOUR= ONE_HOUR/2;

const SIX_HOURS = ONE_HOUR * 6;

export const {
    SESSION_SECRET=`password`,
    SESSION_NAME=`sid`,
    SESSION_IDLE_TIMEOUT=HALF_HOUR
} = process.env

//+() casts to an integer
//forces user to relogin after 6 hours max
export const SESSION_ASOLUTE_TIMEOUT = +(process.env.SESSION_ASOLUTE_TIMEOUT || SIX_HOURS)

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: false, //boolean value, depends on whether in production mode //TAKE A LOOK AT THISSSSSSSSSSSSSSSS!!
        sameSite: false, //change to true in prod

    },
    rolling: true, //cookie timeout is rolled if user is still active
    resave: false,
    saveUninitialized:false,
}