import { NextFunction, Request, Response, RequestHandler } from "express"

//wrapper function to catch errors in async functions
//handler: RequestHandler is the async function that is taken as an argument
//then it takes args: req, res and next and returns a function handler(args) with catch appended to it

export const catchAsync = (handler: RequestHandler) =>
//@ts-ignore
 (...args: [Request, Response, NextFunction]) => handler(...args).catch(args[2])

 export const internalServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!err.status) {
        console.log(err.stack)
    }
    
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error!"})
}

export const notFound = (req: Request, res: Response, next: NextFunction) => res.status(404).json({message:"Not Found"})