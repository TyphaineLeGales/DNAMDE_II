import Film from "./Film";

export default function Favorites({
  favorites,
  toggleFavorite,
}) {
  return (
    <>
      <h2>Mes favoris ❤️</h2>

      {favorites.length === 0 ? (
        <p className="no-result">
          Aucun favori pour le moment
        </p>
      ) : (
        <div className="film-grid">
          {favorites.map((film) => (
            <Film
              key={film.id}
              film={film}
              title={film.title}
              year={film.release_date}
              image={film.image}
              rating={film.rt_score}
              plot={film.description}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  );
}