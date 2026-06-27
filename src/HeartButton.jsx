import "./card.css";


function HeartButton(props){

    return (
        <div>
            { <img onClick={props.onBtnClick} className="favorite-icon" src="src/assets/no-filled-heart-icon.svg" alt="" /> }
        </div>
    )


}


export default HeartButton;


