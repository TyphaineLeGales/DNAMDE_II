import Film from './film';

function FilmList(props) {

    return (
        <div className='film-grid'>
            {props.film.map(film => <Film data={film} />)}
        </div>
    )
}

export default FilmList