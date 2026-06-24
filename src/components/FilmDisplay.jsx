import React, { Suspense } from "react";
import FilmCard from "./FilmCard";
import InputBar from "./InputBar";
import TagList from "./TagList";
import { useEffect, useState } from "react";
import data from "../assets/filmData.json";
import Loading from "./Loading";

function FilmDisplay() {
  const [dataLoad, isDataLoad] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.vercel.app/films/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFilms(json);
        isDataLoad(true);
      });
  }, []);

  const [value, setValue] = useState(" ");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (tag, isActive) => {
    setSelectedTags((prev) =>
      isActive ? [...prev, tag] : prev.filter((t) => t !== tag),
    );
  };

  const ghibliFilms = films.filter((film) => {
    const matchesSearch = film.title
      .toLowerCase()
      .includes(value.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => film.producer.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <>
      <InputBar valueChange={handleChange}></InputBar>
      <TagList onSelect={handleTagSelect} />
      <Suspense fallback={<Loading />}>
        <div className="film-display">
          {dataLoad && ghibliFilms.length === 0 ? (
            <p>nothing found</p>
          ) : (
            ghibliFilms.map((film) => (
              <FilmCard
                key={film.title}
                preview={film.image}
                title={film.title}
                date={film.release_date}
                rating={film.rt_score}
                producer={film.producer}
                resume={film.description.substring(0, 120) + "..."}
              />
            ))
          )}
        </div>
      </Suspense>
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
