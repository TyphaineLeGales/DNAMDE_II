import { useState } from "react";
import PosterDisplay from "./PosterDisplay";

function PosterPage() {
  const [isSearch, setIsSearch] = useState(true);


  return (
    <>
      <header className="header-select">
        <button
          onClick={() => setIsSearch(true)}
          className={isSearch ? "header-link active" : "header-link"}
        >
          Search
        </button>
        <button
          onClick={() => setIsSearch(false)}
          className={!isSearch ? "header-link active" : "header-link"}
        >
          Favorites
        </button>
      </header>
      <PosterDisplay condition={isSearch} />
    </>
  );
}

export default PosterPage;
