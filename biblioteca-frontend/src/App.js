// src/App.js
import React from 'react';
import Livros from './components/Livros';
import Autores from './components/Autores';

const App = () => {
    return (
        <div>
            <h1>Biblioteca Online</h1>
            <Autores />
            <Livros />
        </div>
    );
};

export default App;
