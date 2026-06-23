import React from 'react'; 

function Film({ film }) { // Film.jsx ici avec les structures//
  const { title, year, image, genre, rating, description } = film;

  return ( // Les structures // 
    <div className="film-card">
      <img src={image} alt={title} className="film-image" />
      <div className="film-content">
        <h3 className="film-title">{title}</h3>
        <p className="film-year">{year}</p>
        <p className="film-genre">{genre}</p>
        <p className="film-rating">✦ {rating}</p>
        <p className="film-description">{description}</p>
      </div>
    </div>
  );
}

export default Film;