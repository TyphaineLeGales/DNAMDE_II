function Film({ title, year, poster, genre, rating }) {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />

      <div className="film-content">
        <h2>{title}</h2>

        <div className="film-info">
          <p>{year}</p>
          <p>⭐ {rating}</p>
        </div>

        <p className="genre">{genre}</p>
      </div>
    </div>
  );
}

export default Film;