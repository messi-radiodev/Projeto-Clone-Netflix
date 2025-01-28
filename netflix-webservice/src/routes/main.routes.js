const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');


// pegar todos os registros
router.get('/', (req, res) => {
    res.json({ mensagem: 'Pegar todos os registros.'});
});

// pegar um registro específico.
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Pegar um registro específico. ${id}`});
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
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Atualizar o registro específico ${id}`});
});

// deletar um registro específico
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Deletar o registro específico ${id}`});
});

module.exports = router;