export default function Film({ title, year, image, rating, plot }) {
  return (
    <div className="film-card">
      <img src={image} alt={title} />

      <div className="film-content">
        <h3>{title}</h3>
        <p className="film-year">{year}</p>
        <p className="film-rating">⭐ {rating}/10</p>
        <p className="film-plot">{plot}</p>
      </div>
    </div>
  );
}