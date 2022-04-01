"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.internalServerError = exports.catchAsync = void 0;
//wrapper function to catch errors in async functions
//handler: RequestHandler is the async function that is taken as an argument
//then it takes args: req, res and next and returns a function handler(args) with catch appended to it
const catchAsync = (handler) => 
//@ts-ignore
(...args) => handler(...args).catch(args[2]);
exports.catchAsync = catchAsync;
const internalServerError = (err, req, res, next) => {
    if (!err.status) {
        console.log(err.stack);
    }
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error!" });
};
exports.internalServerError = internalServerError;
const notFound = (req, res, next) => res.status(404).json({ message: "Not Found" });
exports.notFound = notFound;
