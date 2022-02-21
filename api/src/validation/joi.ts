import { ObjectSchema } from "joi"
import { BadRequest } from "../errors"

export const validate = async(schema: ObjectSchema, payload: any) => {
    try {
        //returns a promise that resolves to the value of the valid object
        //or rejects with an error with an error message
        await schema.validateAsync(payload)
    } catch (e: any) {
        if (e instanceof Error) {
            throw new BadRequest(e.message)
        } else {
            e.message
        }
    }
}