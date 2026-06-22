import filmData from '../assets/filmData.json';
import Film from './Film';
import './FilmList.css'


function FilmList() {
  return (
    <div className="filmlist">
      {filmData.map((film, index) => (
        <Film 
        key={index}
        Title={film.Title}
        Genre={film.Genre}
        Year={film.Year}
        Images={film.Images}
        imdbRating={film.imdbRating}
        Plot={film.Plot}
        />
      ))}
    </div>
  )
}

export default FilmList;