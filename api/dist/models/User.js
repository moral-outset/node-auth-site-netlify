"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const config_1 = require("../config");
const userSchema = new mongoose_1.Schema({
    email: String,
    name: String,
    password: String,
    bio: String,
}, {
    timestamps: true
});
//hashes the password
userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await (0, bcryptjs_1.hash)(this.password, config_1.BCRYPT_WORK_FACTOR);
    }
});
//Create a method for userSchema to compare input pw with pw associated with user in DB this.pw is the hashed pw
userSchema.methods.matchesPassword = function (password) {
    return (0, bcryptjs_1.compare)(password, this.password);
};
// to exclude __v and password when returning user object upon /home
userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
});
exports.User = (0, mongoose_1.model)('User', userSchema);
