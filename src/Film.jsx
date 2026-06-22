function Film({ title, year, poster, genre, rating }) {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{genre}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Film;