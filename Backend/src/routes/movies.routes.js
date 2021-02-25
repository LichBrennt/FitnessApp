import { Router } from 'express'
//database
import '../database'
//Schemas
import MovieSchema from '../models/Movies'

const router = Router()


//Obtener todos los registros
router.get('/', async (req,res)=>{
    const result = await MovieSchema.find({})
    res.status(200).json(result)
})

//Obtener solo un registro
router.get('/:id', async (req,res)=>{
    const {id} = req.params
    await MovieSchema.findById(id, (err, doc)=>{
        if (err) {
            console.log(err)
        }else{
            res.status(200).json(doc)
        }
    })

})

//Insertar un registro
router.post('/', async (req, res)=>{
    console.log(req.body)
    const newMovie = new MovieSchema({
        title: req.body.title,
        release: req.body.release,
        genere: req.body.genere,
        description: req.body.description,
        directedBy: req.body.directedBy,
        imgReference: req.body.imgReference,
        starring: req.body.starring,
        trailer: req.body.trailer
    })
    await newMovie.save((err, doc)=>{
        if (err) {
            console.log(err)
        }else{
            res.status(200).json(doc)
        }
    })

})

//Actualizar un registro
router.put('/:id', async (req,res)=>{
    const { id } = req.params
    const updateMovie = {
        title: req.body.title,
        release: req.body.release,
        genere: req.body.genere,
        description: req.body.description,
        directedBy: req.body.directedBy,
        imgReference: req.body.imgReference,
        starring: req.body.starring,
        trailer: req.body.trailer
    }
    await MovieSchema.findByIdAndUpdate(id,{$set:updateMovie}, {new:true},(err,doc)=>{
        if (err) {
            console.log(err)
        }else{
            res.status(200).json(doc)
        }
    })
    
})

//Eliminar un registro
router.delete('/:id', async (req, res)=>{
    const { id } = req.params
    await MovieSchema.findByIdAndRemove(id,{rawResult:true}, (err,doc)=>{
        if (err) {
            console.log(err)
        }else{
            res.status(200).json(doc)
        }
    })

})

export default router