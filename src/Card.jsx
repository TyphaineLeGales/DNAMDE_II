import "./card.css";

function Card(props) {
 // console.log(props);

  return (
    <div className="card">
      <img src={props.data.image} alt="" className="movie-picture" />
      <img className="favorite-icon" src="src/assets/no-filled-heart-icon.svg" alt="" />
      <h1 className="movie-title"> {props.data.title} </h1>
      <div className="movie-date-rate-container">
        <p className="movie-date">{props.data.release_date}</p>
        <div className="movie-rate">
          <p>⭐ {props.data.rt_score}</p>
        </div>
      </div>
      <p className="movie-genres">{props.data.Genre}</p>
      <p className="movie-synopsis"> {props.data.description}</p>
    </div>
  );
}

export default Card;
