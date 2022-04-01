"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const validation_1 = require("../validation");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/profile', middleware_1.auth, (0, middleware_1.catchAsync)(async (req, res) => {
    //exclude/include certain values using .select()
    // const user = await User.findById(req.session!.userId).select('-password -__v')
    const user = await models_1.User.findById(req.session.userId).select('-password -__v -createdAt -updatedAt');
    res.json(user);
}));
router.post('/profile/bio', middleware_1.auth, (0, middleware_1.catchAsync)(async (req, res) => {
    const { bio } = req.body;
    await (0, validation_1.validate)(validation_1.bioSchema, req.body);
    const user = await models_1.User.findById(req.session.userId).select('-password -__v -createdAt -updatedAt');
    await models_1.User.updateOne({ _id: user._id }, { bio: bio });
    res.json(bio);
}));
exports.default = router;
