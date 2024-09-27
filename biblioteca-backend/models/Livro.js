// models/Livro.js
const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor' },
    descricao: String,
    anoPublicacao: Number
});

module.exports = mongoose.model('Livro', LivroSchema);
