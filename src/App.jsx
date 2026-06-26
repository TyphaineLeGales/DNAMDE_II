import Search from  "./Search"
import Favorites from "./Favorites"
import { useState, createContext } from "react";
import FavoriteContext from "./FavoriteContext";

function App() {
    const [favorite, setFavorite] = useState([]);
  
    const FavoritesContext = createContext(favorite);

    const addToFavorites = () => {
        setFavorite((isFavorite) => !isFavorite); //comme un toggle, change le favorite state
        console.log("favorite : ", favorite)
        
      };
  
    return (
    <FavoriteContext  value={{ favorite, setFavorite }}>
         <div> <Search addToFavorites={addToFavorites}/></div>
         <div> <Favorites favorite={favorite}/></div>
    </FavoriteContext>
    )

    
    }

    export default App