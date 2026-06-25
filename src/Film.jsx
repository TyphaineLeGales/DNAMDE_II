function Film({ title, year, poster, genre, rating }) {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />

      <div className="film-content">
        <h2>{title}</h2>

        <div className="film-info">
          <div className="info-box">
            <span className="info-label">ANNEE</span>
            <span className="info-value">{year}</span>
          </div>

          <div className="info-box">
            <span className="info-label">NOTE</span>
            <span className="info-value">⭐ {rating}</span>
          </div>
        </div>

        <p className="genre">{genre}</p>
      </div>
    </div>
  );
}

export default Film;