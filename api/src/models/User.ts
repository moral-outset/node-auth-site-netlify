import mongoose, { Schema, model, Document } from "mongoose";
import { compare, hash } from 'bcryptjs'
import { BCRYPT_WORK_FACTOR } from '../config'

interface UserDocument extends Document {
    email: string,
    name: string,
    password: string
    matchesPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
    email:String,
    name:String,
    password: String,
    bio: String,
}, {
    timestamps: true
})

//hashes the password
userSchema.pre<UserDocument>('save', async function () {
    if (this.isModified('password')) {
        this.password = await hash(this.password,BCRYPT_WORK_FACTOR)
    }
})

//Create a method for userSchema to compare input pw with pw associated with user in DB this.pw is the hashed pw
userSchema.methods.matchesPassword = function(password: string) {
    return compare(password, this.password)
}

// to exclude __v and password when returning user object upon /home
userSchema.set('toJSON',{
    transform: (doc, {__v, password, ...rest}, options) => rest
})

export const User = model<UserDocument>('User', userSchema)