import Joi from "joi";
import { BCRYPT_MAX_BYTES } from "../config";

const email = Joi.string().email().min(8).max(254).lowercase().trim().required()

const name = Joi.string().min(3).max(128).trim().required()

const password = Joi.string().min(8).max(BCRYPT_MAX_BYTES,'utf8')
    .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u) //1 upper case, lower case and 1 digit of unicode type
    .message('"${#label}" must contain one uppercase letter, one lowercase letter and one digit')
    .required() //password is max 72 bytes

const passwordConfirmation = Joi.valid(Joi.ref('password')).required()

const bio = Joi.string().min(0).max(280)

export const registerSchema = Joi.object({
    email,
    name,
    password, 
    passwordConfirmation
})
export const loginSchema = Joi.object({
    email,
    password
})
export const bioSchema = Joi.object({
    bio
})