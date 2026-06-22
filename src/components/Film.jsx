function Film({ Title, Year, Poster, Genre,imdbRating, Plot}) {
  return (
    <div className="film">
      <img src={Poster} alt={Poster} />
      <h2>{Title}</h2>
      <p>{Year}</p>
      <p>{imdbRating}</p>
      <h3>{Genre}</h3>
      <p>{Plot}</p>
    </div>
  );
}

export default Film;