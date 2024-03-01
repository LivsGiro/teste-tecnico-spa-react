import React, { useState } from 'react';
import styles from "../Search/Search.module.css"
// Defina o componente Search
const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Chame a função de busca ao alterar o termo de pesquisa
      };

    return (
        <input className={styles.search}
            type="text"
            placeholder="Pesquisar pokémon por número, tipo ou nome..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

// Exporte o componente Search
export default Search;

