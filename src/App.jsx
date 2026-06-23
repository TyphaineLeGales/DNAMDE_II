import MovieCard from "./movies";
import movies from "./assets/filmData.json";

function App() {
  return (
    <div>
      <div className="search-container">
        <label>Search a movie </label>
        <input type="text" />
      </div>

      <div className="movies-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
