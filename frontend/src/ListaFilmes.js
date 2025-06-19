import React, { useState } from 'react';

const ListaFilmes = () => {
  const [filmes, setFilmes] = useState(['Velozes e Furiosos', 'Triplo X', 'Missão Impossível']);
  const [novoFilme, setNovoFilme] = useState('');

  const adicionarFilme = () => {
    if (novoFilme.trim() !== '') {
      setFilmes([...filmes, novoFilme.trim()]);
      setNovoFilme('');
    }
  };

  return (
    <div>
      <h2>Minha Lista de Filmes</h2>
      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={novoFilme}
        onChange={(e) => setNovoFilme(e.target.value)}
      />
      <button onClick={adicionarFilme}>Adicionar Filme</button>
    </div>
  );
};

export default ListaFilmes;
