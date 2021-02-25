import { Schema, model } from 'mongoose'

const MovieSchema = new Schema({
    title: String,
    release: Number,
    genere: String,
    description: String,
    directedBy: String,
    imgReference: String,
    starring: String,
    trailer: String
})

export default model('Movie', MovieSchema)