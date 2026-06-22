import MovieCard from "./movies";
import movies from "./assets/filmData.json";

function App() {
  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default App;
