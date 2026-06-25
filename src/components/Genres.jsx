function Genres({genres, selectedGenre, setselectedGenre}){
return (
  <div className="genres">
    {genres.map((genres) => (
    <span
    key={genres} className="tags"
    onClick={() => 
    setselectedGenre(
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