import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '.';
import { isLoggedIn, logOut } from '../auth'
import { SESSION_ASOLUTE_TIMEOUT } from '../config';
import { Unauthorized } from '../errors';

export const guest = (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(new Unauthorized('You are already logged in!'))
    }
    next()
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (!isLoggedIn(req)) {
        return next(new Unauthorized('You must be logged in!'))
    }
    next()
}

export const active = async(req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        const now = Date.now()
        //createdAt could be undefined if you didnt call app.use(session) at app.ts
        const { createdAt } = req.session

        if (now > createdAt! + SESSION_ASOLUTE_TIMEOUT) {
            await logOut(req, res)
            return next(new Unauthorized('Session expired'))
        }
    }
    next()
}