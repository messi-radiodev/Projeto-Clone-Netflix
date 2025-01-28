const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/locacao')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err));