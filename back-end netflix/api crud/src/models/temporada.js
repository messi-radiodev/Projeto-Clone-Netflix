const mongoose = require('mongoose');

// mongoose.Schema em projetos maiores, neste caso pode ser utilizdo o que eu utilizarei.
const Temporada = mongoose.model('Temporada', {
    filme_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Filme'
    },
    titulo: String
})

module.exports = Temporada;
