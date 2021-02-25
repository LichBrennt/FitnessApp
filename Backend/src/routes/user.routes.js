import { Router } from 'express'
import '../database'
import UserSchema from '../models/User'

const router = Router()

router.get('/', async (req, res)=>{
    const result = await UserSchema.find({})
    res.status(200).json(result)
} )

router.get('/:id', async (req,res)=>{
    const {id} = req.params
    const result = await UserSchema.findById({_id: id}, (err,doc)=>{
        err? console.log(err): res.status(200).json(doc)
    })
})

router.post('/', async (req,res)=>{
    console.log(req.body)
    const newUser = new UserSchema({
        NickName: req.body.NickName,
        Email: req.body.Email,
        password: req.body.Password
    })

    await newUser.save((err,doc)=>{
        err? console.log(err): res.status(200).json(doc)
    })
})


router.delete('/:id', async (req,res)=>{
    const { id } = req.params
    await UserSchema.findByIdAndRemove(id, {rawResult:true},(err,doc)=>{
        err?console.log(err): res.status(200).json(doc)
    })
})


router.put('/:id', async (req,res)=>{
    const { id } = req.params
    const updateUser = {
        NickName: req.body.NickName,
        Email: req.body.Email,
        Password: req.body.Password
    }
    await UserSchema.findByIdAndUpdate(id,{$set:updateUser},{new:true},(err,doc)=>{
        err? console.log(err): res.status(200).json(doc)
    })
})


export default router