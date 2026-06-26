import Film from './Film';
import './FilmList.css';

function FilmList({ films }) {
  return (
    <div className="filmlist">
      {films.map((film, index) => (
    <Film
      key={index}
      title={film.title}
      release_date={film.release_date}
      director={film.director}
      image={film.image}
      rt_score={film.rt_score}
      description={film.description}
      />
      ))}
    </div>
    );
    }

export default FilmList;