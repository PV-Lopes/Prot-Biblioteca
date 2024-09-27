const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const livrosRoutes = require('./routes/livros');
const autoresRoutes = require('./routes/autores');

const app = express();

// Conectar ao banco de dados
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/livros', livrosRoutes);
app.use('/autores', autoresRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
