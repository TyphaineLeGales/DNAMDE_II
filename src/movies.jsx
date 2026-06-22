import "./movies.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <div className="movie-content">
        <h2>{movie.Title}</h2>

        <div className="movie-info">
          <span>{movie.Year}</span>
        </div>

        <p className="genre">{movie.Genre}</p>

        <p className="plot">{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;