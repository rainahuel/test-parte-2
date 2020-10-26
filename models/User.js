const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {type: String, required: [true, 'el nombre es requerido']},
    email: {type: String, unique: true, required: [true, 'el email es requerido']},
    password: {type: String, required: [true, 'la contraseña es necesaria']}
})

userSchema.plugin(uniqueValidator, {message: '{PATH} correo debe ser unico'})

module.exports = mongoose.model('Users', userSchema)