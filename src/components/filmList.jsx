import Film from './film';

function FilmList(props) {

    return (
        <div className='film-grid'>
            {props.film.map((film) => <Film key={film.imdbID} data={film} />)}
        </div>
    )
}

export default FilmList