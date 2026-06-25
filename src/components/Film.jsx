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
  const isFavorite = favorites.some(
    (fav) => fav.id === film.id
  );

  return (
    <div className="film-card">
      <button
        className="favorite-heart"
        onClick={() => toggleFavorite(film)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img src={image} alt={title} />

      <div className="film-content">
        <h3>{title}</h3>

        <p>{year}</p>

        <p>⭐ {rating}/100</p>

        <p className="film-plot">
          {plot}
        </p>
      </div>
    </div>
  );
}