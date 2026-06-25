function Genres({genres, selectedGenre, setSelectedGenre}){
return (
  <div className="genres">
    {genres.map((genres) => (
    <span
    key={genres} className="tags"
    onClick={() => 
    setSelectedGenre(
    genres === selectedGenre ? "" : genres
    )
    }
    className={genres === selectedGenre ? "tags active" : "tags"}
    >
    {genres}
    </span> 
    ))}
  </div>
   
)
}

export default Genres;