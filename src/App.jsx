import Search from "./Search";
import Favorites from "./Favorites";
import { useState } from "react";
import FavoriteContext from "./FavoriteContext";

function App() {
  const [favorite, setFavorite] = useState([]);

  const addToFavorites = () => {
    setFavorite((prev) => {
      console.log("previous state : ", prev);
    }); //comme un toggle, change le favorite state
   // console.log("favorite : ", favorite);
  };

  return (
    <FavoriteContext value={{ favorite, setFavorite }}>
      <div>
        {" "}
        <Search addToFavorites={addToFavorites} />
      </div>
      <div>
        {" "}
        <Favorites favorite={favorite} />
      </div>
    </FavoriteContext>
  );
}

export default App;
