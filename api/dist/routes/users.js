"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/users', (0, middleware_1.catchAsync)(async (req, res) => {
    //exclude/include certain values using .select()
    // const user = await User.findById(req.session!.userId).select('-password -__v -bio')
    const users = await models_1.User.find().select('-password -__v -createdAt -updatedAt');
    res.json(users);
}));
router.get('/users/:userId', (0, middleware_1.catchAsync)(async (req, res) => {
    const userId = req.params.userId;
    const user = await models_1.User.findById(userId).select('-password -__v -createdAt -updatedAt');
    res.json(user);
}));
exports.default = router;
