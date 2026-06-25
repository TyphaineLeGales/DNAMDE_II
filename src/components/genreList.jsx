import Genre from './genre';

function GenreList(props) {

    return(
        <div className='genre-list'>
            {props.genre.map(genre => <Genre data={genre} />)}
        </div>
    )
}

export default GenreList