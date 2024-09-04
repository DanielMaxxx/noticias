import React, { useState } from 'react';
import '../css/EditNews.css'; 


const AddEditNews = () => {
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');

  const handleSave = () => {
    // Função para salvar a notícia
    console.log('Salvando notícia', { title, description, Data });
  };
  
    <div>
    <h1>Adicionar Noticia</h1>
    </div>

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
      <input
        type="text"
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      
      <button onClick={handleSave}>Salvar</button>

    </div>
    
  );
};

export default AddEditNews;
