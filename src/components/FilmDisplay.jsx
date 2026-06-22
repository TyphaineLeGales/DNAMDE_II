import FilmCard from "./FilmCard";
import InputBar from "./InputBar";
import { useState } from "react";
import data from "../assets/filmData.json";

function FilmDisplay() {
  const [value, setValue] = useState();
  const [isUserSearching, setIsUserSearching] = useState(true);

  const handleChange = (e) => {
    setIsUserSearching(true);
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <InputBar valueChange={handleChange}></InputBar>
      <div className="film-display">
        {isUserSearching
          ? "nothing to see here"
          : data.map((film) => {
              return (
                <FilmCard
                  key={film.Title}
                  preview={film.Images[0]}
                  title={film.Title}
                  date={film.Released}
                  rating={film.Metascore}
                  genre={film.Genre}
                  resume={film.Plot}
                />
              );
            })}
      </div>
    </>
  );
}

export default FilmDisplay;

/* {data.map((film) => {
          return (
            <FilmCard
              key={film.Title}
              preview={film.Images[0]}
              title={film.Title}
              date={film.Released}
              rating={film.Metascore}
              genre={film.Genre} 
              resume={film.Plot}
            />
          );
        })} */
