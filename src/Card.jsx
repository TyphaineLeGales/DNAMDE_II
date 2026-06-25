import "./card.css";

function Card(props) {
 // console.log(props);

  return (
    <div className="card">
      <img src={props.data.Images[0]} alt="" className="movie-picture" />
      <h1 className="movie-title"> {props.data.Title} </h1>
      <div className="movie-date-rate-container">
        <p className="movie-date">{props.data.Year}</p>
        <div className="movie-rate">
          <p>⭐ {props.data.imdbRating}</p>
        </div>
      </div>
      <p className="movie-genres">{props.data.Genre}</p>
      <p className="movie-synopsis"> {props.data.Plot}</p>
    </div>
  );
}

export default Card;
