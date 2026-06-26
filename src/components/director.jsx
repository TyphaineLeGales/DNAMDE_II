function Director(props){

    return(
        <button onClick={() => props.setSelectedDirector(props.name)} className={`${props.name === props.selectedDirector ? "director-container active" : "director-container"} ${props.isDarkModeActive ? "btn-dark" : ""}`}>
            <p className="director-text">{props.name}</p>
        </button>
    )
}

export default Director