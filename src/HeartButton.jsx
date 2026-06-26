
import { useContext } from "react";
import FavoriteContext from "./FavoriteContext";
import "./card.css";


function HeartButton(){

    const {setFavorite} = useContext(FavoriteContext)


    console.log(setFavorite)
    return (
        <div>
            { <img onClick={setFavorite} className="favorite-icon" src="src/assets/no-filled-heart-icon.svg" alt="" /> }
        </div>
    )


}


export default HeartButton;

