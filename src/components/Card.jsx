import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      {/* <picture className="movie-poster">
        <source srcset={props.data.Images[0]} alt="Poster"/>
        <source srcset="placeholder.webp" alt="Poster"/>
        <img src="placeholder.webp" alt="" />
        
      </picture> */}
      <img className="movie-poster" src={props.data.Images?.[0] ?? "placeholder.webp"} alt="Poster"/>
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