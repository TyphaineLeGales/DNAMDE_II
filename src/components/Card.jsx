import './Card.css'
export default function Card(props) {
  return (
    <div className="card">
      <img className="movie-poster" src={props.data.Images?.[0] ?? "placeholder.webp"} alt="Poster"/>
      <div className="movie-data">
        <p className="movie-title">{props.data.Title}</p>
        <div className="movie-infos">
          <span>{props.data.Year}</span>
          <span>★ {props.data.imdbRating}</span>
        </div>

        <div className="tags">
          {props.data.Genre.split(",").map((genre) => (
            <span key={genre.trim()} className="tag">
              {genre.trim()}
            </span>
          ))}
        </div>

        <p className="movie-desc">{props.data.Plot}</p>
      </div>
    </div>
  )
}