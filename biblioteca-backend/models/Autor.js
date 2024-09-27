// models/Autor.js
const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    biografia: String,
    dataNascimento: Date
});

module.exports = mongoose.model('Autor', AutorSchema);
