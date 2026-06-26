import "./movies.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-image"
      />

      <div className="movie-content">
        <h2>{movie.title}</h2>

        <div className="movie-info">
          <span>{movie.release_date}</span>
          <span>⭐ {movie.rt_score}</span>
        </div>

        <p className="plot">
          {movie.description}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;