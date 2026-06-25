import Genre from './genre';

function GenreList(props) {

    return(
        <div className='genres'>
            <div className='genre-list'>
                {props.genre.map((genre, i) => <Genre key={i} name={genre} selectedGenre={props.selectedGenre} setSelectedGenre={props.setSelectedGenre}/>)}
            </div>
        </div>
    )
}

export default GenreList