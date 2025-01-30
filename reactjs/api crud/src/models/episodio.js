const mongoose = require('mongoose');

// mongoose.Schema em projetos maiores, neste caso pode ser utilizdo o que eu utilizarei.
const Episodio = mongoose.model('Episodio', {
    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Temporada'
    },
    titulo: String,
    descricao: String,
    numero: Number,
    capa: String
})

module.exports = Episodio;
