function Film({
  title,
  year,
  poster,
  genre,
  rating,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div className="film-card">
      <button
        className="favorite-btn"
        onClick={toggleFavorite}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img src={poster} alt={title} />

      <div className="film-content">
        <h2>{title}</h2>

        <div className="film-info">
          <div className="info-box">
            <span className="info-label">YEAR</span>
            <span className="info-value">{year}</span>
          </div>

          <div className="info-box">
            <span className="info-label">RATING</span>
            <span className="info-value">⭐ {rating}</span>
          </div>
        </div>

        <p className="genre">{genre}</p>
      </div>
    </div>
  );
}

export default Film;