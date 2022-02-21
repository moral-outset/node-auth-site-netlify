import { Request, Response } from 'express';
import { SESSION_NAME } from './config';

declare module 'express-session' {
  export interface SessionData {
    userId: string,
    createdAt: number
  }
}

export const logIn = (req: Request, userId: string) => {
    req.session!.userId = userId;
    req.session!.createdAt = Date.now();
}

export function isLoggedIn(req: Request) {
  if (req.session.userId) {
    return true
  } else {
    return false
  }
}

export const logOut = (req: Request, res: Response) => 
    new Promise<void>((resolve, reject) => {
        req.session!.destroy((err: Error) => {
            if (err) reject(err)

            res.clearCookie(SESSION_NAME)

            resolve()
        })
    })

