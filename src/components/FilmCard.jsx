function FilmCard({ preview, title, date, rating, producer, resume }) {
  return (
    <div className="film-card">
      <img src={preview} className="film-image" alt={title} />
      <div className="film-info">
        <h1>{title}</h1>
        <span className="span-card">
          <p>{date}</p>
          <p>⭐ {rating}</p>
        </span>
        <h2>{producer}</h2>
        <p>{resume}</p>
      </div>
    </div>
  );
}

export default FilmCard;
