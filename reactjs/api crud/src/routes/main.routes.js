const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const _ = require('underscore');

// recuperar tela home
router.get('/home', async (req, res) => {
    try {
        // recuperar todos os filmes
        let filmes = await Filme.find({});
        let finalFilmes = [];
        
        // recuperar todas as temporadas
        for (let filme of filmes) {
            const temporadas = await Temporada.find({filme_id: filme._id});
            const newFilme = {...filme._doc, temporadas};
            finalFilmes.push(newFilme); 
        }

        // misturar resultados aleatoriamente
        finalFilmes = _.shuffle(finalFilmes);

        // filme principal
        const filmePrincipal = finalFilmes[0];

        // dividir em seções
        const secoes = _.chunk(finalFilmes, 5);

        res.json({error: false, filmePrincipal, secoes});
        

    } catch (err) {
        res.json({error: true, message: err.message});
    }
})


// pegar todos os registros
router.get('/', async (req, res) => {

    try {
        const filmes = await Filme.find({}); // Busca todos os filmes, o espaço dentro das chaves serve de filtro, por exemplo: buscar titulo Harry Potter, busca por {titulo: "Harry Potter"}, ele buscará apenas o filme Harry Potter.
        res.json({error: false, filmes});
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
    
});

// pegar um registro específico.
router.get('/:id', async (req, res) => {
    try {
    const id = req.params.id;
    const filme = await Filme.findById(id);
    res.json({error: false, filme});
    } catch (err) {
        res.json({error: true, message: err.message});
    }
    
});

// criar um registro.
router.post('/', async (req, res) => {
    try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({error: false, filme: response});
    } catch (err) {
        res.json({error: true, message: err.message});
    }

    
});

// atualizar um registro
router.put('/:id', async (req, res) => {
    try {
    const id = req.params.id;
    const novofilme = req.body;
    const filme = await Filme.findByIdAndUpdate(id, novofilme);
    res.json({error: false, filme});
    } catch (err) {
        res.json({error: true, message: err.message});
    }
});

// deletar um registro específico
router.delete('/:id', async (req, res) => {

    try {
    const id = req.params.id;
    await Filme.findByIdAndDelete(id);
    res.json({ error: false, message: 'Filme deletado com sucesso'});
    } catch (err) {
        res.json({error: true, message: err.message});
    }
});

module.exports = router;