import { Router } from 'express'
import { catchAsync } from '../middleware'
import { User } from '../models'

const router = Router()

router.get('/users', catchAsync(async(req,res) => {
    //exclude/include certain values using .select()
    // const user = await User.findById(req.session!.userId).select('-password -__v -bio')
    const users = await User.find().select('-password -__v -createdAt -updatedAt')

    res.json(users)
}))

router.get('/users/:userId', catchAsync(async(req,res) => {
    const userId = req.params.userId;

    const user = await User.findById(userId).select('-password -__v -createdAt -updatedAt')

    res.json(user)
}))

export default router