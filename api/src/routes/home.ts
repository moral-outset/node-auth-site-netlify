import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User } from '../models'

const router = Router()

router.get('/home', auth, catchAsync(async(req,res) => {
    //exclude/include certain values using .select()
    // const user = await User.findById(req.session!.userId).select('-password -__v')
    const user = await User.findById(req.session!.userId).select('-password -__v')

    res.json(user)
}))

export default router