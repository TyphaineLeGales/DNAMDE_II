import Search from  "./Search"
import Favorites from "./Favorites"
import { useState, createContext } from "react";

function App() {
    const [favorite, setFavorite] = useState(false);
    
    const FavoritesContext = createContext(favorite);

    const addToFavorites = () => {
        setFavorite((isFavorite) => !isFavorite); //comme un toggle, change le favorite state
        console.log("favorite : ", favorite)
        
      };
  
    return (
    <FavoritesContext value={favorite}>
         <div> <Search addToFavorites={addToFavorites}/></div>
         <div> <Favorites favorite={favorite}/></div>
    </FavoritesContext>
    )

    
    }

    export default App