const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/', async (req, res) => {
    try {
    const usuario = await new Usuario(req.body).save();
    res.json({error: false, usuario});
    } catch (err) {
        res.json({error: true, message: err.message});
}

});




module.exports = router;