
import { useContext } from "react";
import "./card.css";


function HeartButton(){

    const favorite = useContext(FavoriteContext)
    return (
        <div>
            { <img onClick={favorite} className="favorite-icon" src="src/assets/no-filled-heart-icon.svg" alt="" /> }
        </div>
    )


}


export default HeartButton;

