function Genres({genres}){
return (
  <div className="genres">
    {genres.map((genres) => (
    <span key={genres} className="tags">
    {genres}
    </span> 
    ))}
  </div>
   
)
}

export default Genres;