import "./movies.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Images[0]}
        alt={movie.Title}
        className="movie-image"
      />

      <div className="movie-content">
        <h2>{movie.Title}</h2>

        <div className="movie-info">
          <span>{movie.Year}</span>
          <span>⭐ {movie.imdbRating}</span>
        </div>

        <p className="genre">{movie.Genre}</p>

        <p className="plot">{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;