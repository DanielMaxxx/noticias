import React, { useState } from 'react';

const AddEditNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Função para salvar a notícia
    console.log('Salvando notícia', { title, description });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default AddEditNews;
