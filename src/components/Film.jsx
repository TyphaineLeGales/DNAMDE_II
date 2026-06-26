function Film({ title, release_date, image, Genre,rt_score, description}) {
  return (
    <div className="film">
      <div className="imagecontainer">
      <img className="images" src={image} alt={image} />
      </div>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{rt_score}</p>
      <h3>{Genre}</h3>
      <p>{description}</p>
    </div>
  );
}



export default Film;