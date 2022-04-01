import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { validate, bioSchema } from '../validation'
import { User } from '../models'

const router = Router()

router.get('/profile', auth, catchAsync(async(req,res) => {
    //exclude/include certain values using .select()
    // const user = await User.findById(req.session!.userId).select('-password -__v')
    const user = await User.findById(req.session!.userId).select('-password -__v -createdAt -updatedAt')
    
    res.json(user)
}))

router.post('/profile/bio', auth, catchAsync(async(req,res) => {
    const { bio } = req.body;

    await validate(bioSchema,req.body)

    const user = await User.findById(req.session!.userId).select('-password -__v -createdAt -updatedAt')
    await User.updateOne({_id: user!._id}, {bio: bio})
    res.json(bio)
}))

export default router