const express = require("express");
const morgan = require("morgan");
const app = express();
const database = require("./src/services/database");
const bodyParser = require("body-parser");
const filmeroutes = require("./src/routes/main.routes");
const usuarioroutes = require("./src/routes/usuarios.routes");
const cors = require("cors");
const episodiosroutes = require("./src/routes/episodios.routes");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// ROUTES
app.use('/api',filmeroutes)
app.use('/api/usuario',usuarioroutes)
app.use('/api/episodios',episodiosroutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
