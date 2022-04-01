"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../validation");
const models_1 = require("../models");
const errors_1 = require("../errors");
const auth_1 = require("../auth");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.post('/login', middleware_1.guest, (0, middleware_1.catchAsync)(async (req, res) => {
    await (0, validation_1.validate)(validation_1.loginSchema, req.body);
    const { email, password } = req.body;
    const user = await models_1.User.findOne({ email });
    if (!user || !(await user.matchesPassword(password))) {
        throw new errors_1.Unauthorized('Incorrect email or password!');
    }
    (0, auth_1.logIn)(req, user.id);
    res.json({ message: 'logged in' });
}));
router.post('/logout', middleware_1.auth, (0, middleware_1.catchAsync)(async (req, res) => {
    await (0, auth_1.logOut)(req, res);
    res.json({ message: 'loggedout' });
}));
exports.default = router;
