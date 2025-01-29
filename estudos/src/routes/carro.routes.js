const express = require('express');
const router = express.Router();
const Carro = require('../models/carro');

router.post('/', async (req, res) => {
    try {
    const carro = await new Carro(req.body).save();
    res.json({error: false, carro});
    } catch (err) {
        res.json({error: true, message: err.message});
}

});

router.get('/', async (req, res) => {
    try {
        const carros = await Carro.find();
        res.json({error: false, carros})
    } catch (err) {
        res.json({error: true, message: err.message});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const carro = await Carro.findById(req.params.id).populate('usuario_id' , 'nome'); // se quiser posso adicionar os itens que quero como exemplifiquei acima, querendo mostrar o nome do usuario.
        res.json({error: false, carro})
    } catch (err) {
        res.json({error: true, message: err.message});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const carro = await Carro.findByIdAndUpdate(req.params.id, req.body , {new: true}); 
        // new: true => para retornar o carro atualizado
        res.json({error: false, carro})
    } catch (err) {
        res.json({error: true, message: err.message});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Carro.findByIdAndDelete(req.params.id);
        res.json({error: false, carro})
    } catch (err) {
        res.json({error: true, message: err.message});
    }
})



module.exports = router;