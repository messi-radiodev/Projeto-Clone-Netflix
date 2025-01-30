const mongoose = require('mongoose');

// mongoose.Schema em projetos maiores, neste caso pode ser utilizdo o que eu utilizarei.
const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String
})

module.exports = Usuario;
