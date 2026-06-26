import Director from './director';

function DirectorList(props) {

    return(
        <div className='directors'>
            <div className='director-list'>
                {props.director.map((director, i) => <Director key={i} name={director} selectedDirector={props.selectedDirector} setSelectedDirector={props.setSelectedDirector} isDarkModeActive={props.isDarkModeActive}/>)}
            </div>
        </div>
    )
}

export default DirectorList