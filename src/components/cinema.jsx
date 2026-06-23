import React, { useState, useEffect } from 'react';
import Film from './Film'; // Film.jsx ici //
import './cinema.css'; // et le css //

function Cinema() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('/filmData.json')
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.error("Erreur chargement JSON:", err));
  }, []); // Le tableau de films est vide , puis faut remplir avec les données du JSON //

  return (
    <div className="cinema-container">
      <h1>Liste des Films</h1>
      <div className="film-grid">
        {films.map(film => (
          <Film key={film.title} film={film} />
        ))}
      </div>
    </div>
  );
}
// Touche pas en bas // 
export default Cinema;