const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String,
    idade: Number,
    datacadastro: Date
})



module.exports = Usuario;