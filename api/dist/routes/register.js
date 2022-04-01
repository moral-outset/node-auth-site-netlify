"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const validation_1 = require("../validation");
const auth_1 = require("../auth");
const middleware_1 = require("../middleware");
const errors_1 = require("../errors");
const router = (0, express_1.Router)();
router.post('/register', middleware_1.guest, (0, middleware_1.catchAsync)(async (req, res) => {
    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const { email, name, password, passwordConfirmation } = req.body;
    await (0, validation_1.validate)(validation_1.registerSchema, req.body);
    const found = await models_1.User.exists({ email });
    if (found) {
        throw new errors_1.BadRequest('Invalid Email');
    }
    const user = await models_1.User.create({
        email, name, password, bio
    });
    //then login
    (0, auth_1.logIn)(req, user.id);
    res.json({
        message: 'ok'
    });
}));
exports.default = router;
