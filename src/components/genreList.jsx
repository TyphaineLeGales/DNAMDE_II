import Genre from './genre';

function GenreList(props) {

    return(
        <div className='genres'>
            <div className='genre-list'>
                {props.genre.map(genre => <Genre data={genre} />)}
            </div>
        </div>
    )
}

export default GenreList