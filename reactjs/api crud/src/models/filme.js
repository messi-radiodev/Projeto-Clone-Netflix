const mongoose = require('mongoose');

// mongoose.Schema em projetos maiores, neste caso pode ser utilizdo o que eu utilizarei.
const Filme = mongoose.model('Filme', {
    titulo: String,
    tipo: String,
    capa: String,
    logo: String,
    thumb: String,
    descricao: String,
    generos: Array,
    elenco: Array,
    cenasmomentos: Array
})

module.exports = Filme;
