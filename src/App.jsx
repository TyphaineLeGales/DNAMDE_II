import Search from  "./Search"
import Favorites from "./Favorites"
import { useState } from "react";

function App() {


    const [favorite, setFavorite] = useState(false);

    const addToFavorites = () => {
        setFavorite((isFavorite) => !isFavorite); //comme un toggle, change le favorite state
        
      };
  
    return <div>
         <div> <Search addToFavorites={addToFavorites}/></div>
         <div> <Favorites favorite={favorite}/></div>
    </div>
    
    }

    export default App