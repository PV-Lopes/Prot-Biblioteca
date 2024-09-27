// src/components/Autores.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Autores = () => {
    const [autores, setAutores] = useState([]);
    const [novoAutor, setNovoAutor] = useState({ nome: '', biografia: '', dataNascimento: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/autores')
            .then(response => setAutores(response.data))
            .catch(error => console.log(error));
    }, []);

    const adicionarAutor = () => {
        axios.post('http://localhost:5000/autores', novoAutor)
            .then(response => setAutores([...autores, response.data]))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Lista de Autores</h2>
            <ul>
                {autores.map(autor => (
                    <li key={autor._id}>{autor.nome}</li>
                ))}
            </ul>
            <h3>Adicionar Novo Autor</h3>
            <input
                type="text"
                placeholder="Nome"
                value={novoAutor.nome}
                onChange={(e) => setNovoAutor({ ...novoAutor, nome: e.target.value })}
            />
            <button onClick={adicionarAutor}>Adicionar Autor</button>
        </div>
    );
};

export default Autores;
