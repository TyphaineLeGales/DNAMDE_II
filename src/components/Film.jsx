function Film({ Title, Year, Images, Genre,imdbRating, Plot}) {
  return (
    <div className="film">
      <img src={Images} alt={Images} />
      <h2>{Title}</h2>
      <p>{Year}</p>
      <p>{imdbRating}</p>
      <h3>{Genre}</h3>
      <p>{Plot}</p>
    </div>
  );
}

export default Film;