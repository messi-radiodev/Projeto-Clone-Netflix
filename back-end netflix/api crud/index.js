const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./src/routes/main.routes");


mongoose.connect("mongodb://127.0.0.1:27017/Netflix")
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));



app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api',routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
