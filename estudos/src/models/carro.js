const mongoose = require('mongoose');

const Carro = mongoose.model('Carro', {
    usuario_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario',
    },
    placa: String,
    marca: String,
    modelo: String,
    ano: Number
})

module.exports = Carro;