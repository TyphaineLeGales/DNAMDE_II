import FilmCard from "./FilmCard";
import InputBar from "./InputBar";
import TagList from "./TagList";
import { useState } from "react";
import data from "../assets/filmData.json";

function FilmDisplay() {
  const [value, setValue] = useState(" ");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(filteredFilms);
  };

  const filteredFilms = data.filter((film) =>
    film.Title.toLowerCase().includes(value),
  );



  return (
    <>
      <InputBar valueChange={handleChange}></InputBar>
      <TagList />
      <div className="film-display">
        {filteredFilms.length === 0 ? (
          <p>nothing found</p>
        ) : (
          filteredFilms.map((film) => (
            <FilmCard
              key={film.Title}
              preview={film.Images[0]}
              title={film.Title}
              date={film.Released}
              rating={film.Metascore}
              genre={film.Genre}
              resume={film.Plot}
            />
          ))
        )}
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
