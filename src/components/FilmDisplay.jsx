import FilmCard from "./FilmCard";
import InputBar from "./InputBar";
import { useState } from "react";
import data from "../assets/filmData.json";

function FilmDisplay() {
  const [value, setValue] = useState();
  const [isUserSearching, setIsUserSearching] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setIsUserSearching(true);
    setValue(e.target.value);
  };

  console.log(value);

  return (
    <>
      <InputBar valueChange={handleChange}></InputBar>
      <div className="film-display">
        {isUserSearching
          ? data
              .filter((film) => film.Title.toLowerCase().includes(value) || film.Title.includes(value))
              .map((film) => {
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
              })
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
