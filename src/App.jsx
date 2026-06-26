import CardList from './components/CardList';
import switchOn from './assets/lightswitch-on.png';
import switchOff from './assets/lightswitch-off.png';
import './App.css'
import { useEffect, useState } from 'react';

const API_URL = "https://ghibliapi.vercel.app/films/";

function App() {
  const [films, setFilms] = useState([]);       // données brutes de l'API
  const [filtered, setFiltered] = useState([]); // données filtrées affichées
  const [query, setQuery] = useState("");
  const [director, setDirector] = useState(null); // remplace "genre" (absent de l'API)
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // récupération des films depuis l'API au montage du composant
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
        return res.json();
      })
      .then(data => {
        setFilms(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // liste des réalisateurs (équivalent des "genres" pour cette API)
  const allDirectors = ["All", ...new Set(films.map(f => f.director))];

  // fonction de gestion des filtres par réalisateur et par recherche
  function applyFilters(newQuery, newDirector) {
    setFiltered(films.filter(e =>
      e.title.toLowerCase().includes(newQuery.toLowerCase()) &&
      (!newDirector || e.director === newDirector)
    ));
  }

  // fonction de gestion de la barre de recherche
  function handleSearch(e) {
    setQuery(e.target.value);
    applyFilters(e.target.value, director);
  }

  // fonction de gestion des tags
  function handleTag(g) {
    const newDirector = g === "All" ? null : (director === g ? null : g);
    setDirector(newDirector);
    applyFilters(query, newDirector);
  }

  if (loading) return <p>Chargement des films...</p>;
  if (error) return <p>Erreurs lors du chargement : {error}</p>;

  return (
    <div id='app' className={darkMode ? 'dark' : ''}>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? switchOff : switchOn} alt={darkMode ? "light" : "dark"} />
      </button>

      <input type="search" id='searchbar' value={query} onChange={handleSearch} />

      <div className="genre-filters">
        {allDirectors.map(g => (
          <span
            key={g}
            className={`tag ${(g === "All" && director === null) || director === g ? 'tag-active' : ''}`}
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