import React, { useState } from 'react';
import styles from '../css/AddEditNews.module.css';

const AddEditNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');

  const handleSave = () => {
    console.log('Salvando notícia', { title, description, data });
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar Notícia</h1>
      <input
        type="text"
        placeholder="Título"
        value={title}
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        className={`${styles.textarea} ${styles.input}`}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data"
        value={data}
        className={styles.input}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSave} className={styles.button}>Salvar</button>
    </div>
  );
};

export default AddEditNews;
