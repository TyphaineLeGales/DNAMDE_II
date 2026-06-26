import './Card.css'
export default function Card(props) {
  const film = props.data;
  return (
    <div className="card">
      <img className="movie-poster" src={film.image ?? "placeholder.webp"} alt={film.title} />
      <div className="movie-data">
        <p className="movie-title">{film.title}</p>
        <div className="movie-infos">
          <span>{film.release_date}</span>
          <span>★ {film.rt_score}</span>
        </div>
        <div className="tags">
          <span className="tag">{film.director}</span>
        </div>
        <p className="movie-desc">{film.description}</p>
      </div>
    </div>
  )
}