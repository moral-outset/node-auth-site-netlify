import { Router } from 'express';
import { User } from '../models';
import { validate, registerSchema } from '../validation'
import { logIn } from '../auth';
import { guest, catchAsync } from '../middleware'
import { BadRequest } from '../errors';

const router = Router()

router.post('/register', guest, catchAsync(async(req, res) => {
    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const { email, name, password, passwordConfirmation } = req.body

    await validate(registerSchema,req.body)

    const found = await User.exists({ email })

    if (found) {
        throw new BadRequest('Invalid Email')
    }

    const user = await User.create({
        email, name, password, bio
    })

    //then login
    logIn(req,user.id)

    res.json({
        message:'ok'
    })
}));

export default router;