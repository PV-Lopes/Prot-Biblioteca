// src/components/Livros.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Livros = () => {
    const [livros, setLivros] = useState([]);
    const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', descricao: '', anoPublicacao: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/livros')
            .then(response => setLivros(response.data))
            .catch(error => console.log(error));
    }, []);

    const adicionarLivro = () => {
        axios.post('http://localhost:5000/livros', novoLivro)
            .then(response => setLivros([...livros, response.data]))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {livros.map(livro => (
                    <li key={livro._id}>{livro.titulo} - {livro.autor?.nome}</li>
                ))}
            </ul>
            <h3>Adicionar Novo Livro</h3>
            <input
                type="text"
                placeholder="Título"
                value={novoLivro.titulo}
                onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })}
            />
            <input
                type="text"
                placeholder="Autor ID"
                value={novoLivro.autor}
                onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })}
            />
            <button onClick={adicionarLivro}>Adicionar Livro</button>
        </div>
    );
};

export default Livros;
