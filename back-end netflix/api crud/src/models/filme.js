const mongoose = require('mongoose');

// mongoose.Schema em projetos maiores, neste caso pode ser utilizdo o que eu utilizarei.
const Filme = mongoose.model('Filme', {
    titulo: {type: String, required: true},
    duracao: Number,
    anoLancamento: Number,
    lancado: Boolean,
    atores: Array, // podia ser utilizado [String]
    premios: [Object]
})

module.exports = Filme;
