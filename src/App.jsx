import { useState } from "react";
import MovieCard from "./movies";
import "./search.css";
import movies from "./assets/filmData.json";

function App() {
  
  const [search, setSearch] = useState("");

   const filteredMovies = movies.filter((movie) =>
   movie.Title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="search-container">
        <label>Search a movie </label>
        <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
       />
      </div>

      <div className="movies-container">
  {filteredMovies.map((movie, index) => (
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
