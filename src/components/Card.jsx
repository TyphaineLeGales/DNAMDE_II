import './Card.css'

export default function Card(props) {
  
  // const response = await fetch(props.data.Images[0]);
  // const src = try
  //response.blob();
  // console.log(response)

  return (
    <div className="card">
      <picture className="movie-poster">
        <source src={props.data.Images[0]} alt="Poster"/>
        <img src="placeholder.webp" alt="Poster"/>
      </picture>
      {/* <img className="movie-poster" src={props.data.Images[0]} alt="Poster"/> */}
      <div className="movie-data">
        <p className="movie-title">{props.data.Title}</p>
        <div className="movie-infos">
          <span>{props.data.Year}</span>
          <span>★ {props.data.imdbRating}</span>
        </div>
        <p className="movie-genres">{props.data.Genre}</p>
        <p className="movie-desc">{props.data.Plot}</p>
      </div>
    </div>
  )
}