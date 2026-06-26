import { Link } from "react-router-dom";

export default function Film({
  film,
  title,
  year,
  image,
  rating,
  plot,
  favorites,
  toggleFavorite,
}) {
  const isFavorite = favorites.some((fav) => fav.id === film.id);

  return (
    <div className="film-card">
      <button
        className={`favorite-heart ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(film)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <Link to={`/movie/${film.id}`} className="movie-link">
        <img src={image} alt={title} />
      </Link>

      <div className="film-content">
        <h3>{title}</h3>
        <p className="film-year">{year}</p>
        <p className="film-rating">⭐ {rating}/100</p>
        <p className="film-plot">{plot}</p>
      </div>
    </div>
  );
}