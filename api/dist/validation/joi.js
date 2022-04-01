"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const errors_1 = require("../errors");
const validate = async (schema, payload) => {
    try {
        //returns a promise that resolves to the value of the valid object
        //or rejects with an error with an error message
        await schema.validateAsync(payload);
    }
    catch (e) {
        if (e instanceof Error) {
            throw new errors_1.BadRequest(e.message);
        }
        else {
            e.message;
        }
    }
};
exports.validate = validate;
