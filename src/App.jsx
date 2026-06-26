import Search from "./Search";
import Favorites from "./Favorites";
import { useState } from "react";
import FavoriteContext from "./FavoriteContext";

function App() {
    const [favorites, setFavorites] = useState([]);
  
    const FavoritesContext = createContext(favorites);
  
    return (
    <FavoriteContext  value={{ favorites, setFavorites }}>
         <div> <Search/></div>
         <div> <Favorites favorites={favorites}/></div>
    </FavoriteContext>
    )
    
    }

    export default App
