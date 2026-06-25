import CardList from './components/CardList';
import filmData from './assets/filmData.json?raw';

// import des image pour le bouton mode sombre/light
import switchOn from './assets/lightswitch-on.png';
import switchOff from './assets/lightswitch-off.png';

import './App.css'
import { useState } from 'react';

let jsonData = JSON.parse(filmData);

// Séparation des genres de films 
const allGenres = ["All", ...new Set(jsonData.flatMap(e => e.Genre.split(",").map(g => g.trim())))];

function App() {
  const [filtered, setFiltered] = useState(jsonData);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // fonction de gestion des filtres par genre et par recherche 
  function applyFilters(newQuery, newGenre) {
    setFiltered(jsonData.filter(e =>

      // On rend la barre de recherche non case sensitive puis on filtre
      e.Title.toLowerCase().includes(newQuery.toLowerCase()) &&
      (!newGenre || e.Genre.includes(newGenre))
    ));
  }

  // fonction de gestion de la barre de recherche
  function handleSearch(e) {
    setQuery(e.target.value);
    applyFilters(e.target.value, genre);
  }

  // fonction de gestion des tag de film
  function handleTag(g) {
    const newGenre = g === "All" ? null : (genre === g ? null : g);
    setGenre(newGenre);
    applyFilters(query, newGenre);
  }

  return (
    <div id='app' className={darkMode ? 'dark' : ''}>
      {/* bouton/image pour passer de mode sombre à mode light */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? switchOff : switchOn} alt={darkMode ? "light" : "dark"} />
      </button>

      {/* barre de recherche */}
      <input type="search" id='searchbar' onChange={handleSearch}/>

      {/* liste des tags */}
      <div className="genre-filters">
        {allGenres.map(g => (
          <span
            key={g}

            /* tag "All" en premier */
            className={`tag ${(g === "All" && genre === null) || genre === g ? 'tag-active' : ''}`}
            onClick={() => handleTag(g)}
          >
            {g}
          </span>
        ))}
      </div>
      <CardList cards={filtered}/>
    </div>
  )
}
export default App