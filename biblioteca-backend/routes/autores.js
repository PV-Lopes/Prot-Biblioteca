// routes/autores.js
const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor');

// Criar autor
router.post('/', async (req, res) => {
    const { nome, biografia, dataNascimento } = req.body;
    const autor = new Autor({ nome, biografia, dataNascimento });
    await autor.save();
    res.json(autor);
});

// Obter todos os autores
router.get('/', async (req, res) => {
    const autores = await Autor.find();
    res.json(autores);
});

module.exports = router;
