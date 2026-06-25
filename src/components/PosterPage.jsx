import { useState } from "react";
import PosterDisplay from "./PosterDisplay";

function PosterPage() {
  const [isSearch, setIsSearch] = useState(true);

  const toggleView = () => {
    setIsSearch((isSearch) => !isSearch);
  };
  return (
    <>
      <header className="header-select">
        <button onClick={toggleView} className="header-link">
          Search
        </button>
        <button onClick={toggleView} className="header-link">
          Favorites
        </button>
      </header>
      <PosterDisplay condition={isSearch} />
    </>
  );
}

export default PosterPage;
