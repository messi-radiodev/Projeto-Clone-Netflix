const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");


app.use(morgan('dev'));

// pegar todos os registros
app.get('/', (req, res) => {
    res.json({ mensagem: 'Pegar todos os registros.'});
});

// pegar um registro específico.
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Pegar um registro específico. ${id}`});
});

// criar um registro.
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
});

// atualizar um registro
app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Atualizar o registro específico ${id}`});
});

// deletar um registro específico
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Deletar o registro específico ${id}`});
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
