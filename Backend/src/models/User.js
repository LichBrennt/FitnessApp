import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    NickName: String,
    Email: String,
    Password: String
})

export default model('User', UserSchema)