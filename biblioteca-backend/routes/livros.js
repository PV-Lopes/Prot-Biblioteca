// routes/livros.js
const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');

// Criar livro
router.post('/', async (req, res) => {
    const { titulo, autor, descricao, anoPublicacao } = req.body;
    const livro = new Livro({ titulo, autor, descricao, anoPublicacao });
    await livro.save();
    res.json(livro);
});

// Obter todos os livros
router.get('/', async (req, res) => {
    const livros = await Livro.find().populate('autor');
    res.json(livros);
});

// Atualizar livro
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, descricao, anoPublicacao } = req.body;
    const livro = await Livro.findByIdAndUpdate(id, { titulo, autor, descricao, anoPublicacao }, { new: true });
    res.json(livro);
});

// Deletar livro
router.delete('/:id', async (req, res) => {
    await Livro.findByIdAndDelete(req.params.id);
    res.json({ message: 'Livro removido com sucesso' });
});

module.exports = router;
