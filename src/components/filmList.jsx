import Film from './film';

function FilmList(props) {

    return (
        <div className='film-grid'>
            {props.film.map((film) => <Film key={film.id} data={film} isDarkModeActive={props.isDarkModeActive}/>)}
        </div>
    )
}

export default FilmList