import { useEffect, useState } from "react";
import "../ClippedPoster.css";
import ClippedPoster from "./ClippedPoster";
import properties from "./ClippedProperties.json";
import InputBar from "./InputBar";
import Loading from "./Loading";

function PosterDisplay(props) {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);
    const [dataLoad, isDataLoad] = useState(false);

  const filmStorage = { ...localStorage };

  useEffect(() => {
    const url = "https://ghibliapi.vercel.app/films/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFilms(json);
        isDataLoad(true)
      });

    ////////
  }, []);

  const [value, setValue] = useState(" ");
  const isInFavorite = (filmData) => {
    return favorites.map((f) => f.id).includes(filmData.id);
  };

  const updateFavorites = (filmData) => {
    console.log(favorites, "favorites", isInFavorite(filmData), filmData);
    setFavorites((prev) =>
      isInFavorite(filmData)
        ? prev.filter((f) => f.id !== filmData.id)
        : [...prev, filmData],
    );
  };

  useEffect(() => {
    localStorage.setItem("favorites", favorites);
  }, [favorites]);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const ghibliFilms = films.filter((film) => {
    const matchesSearch = film.title
      .toLowerCase()
      .includes(value.toLowerCase());
    return matchesSearch;
  });

  //**** favoris  */

  return (
    <>
      {props.condition ? (
        <>
          <InputBar valueChange={handleChange}></InputBar>
          <section>
            {dataLoad ? ghibliFilms.slice(0, 20).map((film, index) => (
              <ClippedPoster
                key={film.title}
                image={film.image}
                path={properties[index % properties.length].path}
                id={properties[index % properties.length].id}
                bgColor={properties[index % properties.length].bgColor}
                fillColor={properties[index % properties.length].fillColor}
                favorite={film.title}
                setFav={() => updateFavorites(film)}
                isActive={isInFavorite(film)}
              />
            )) : <Loading />}
          </section>
        </>
      ) : (
        <section>
          {console.log(filmStorage)}
          {favorites.map((film, index) => (
            <ClippedPoster
              key={film.title}
              image={film.image}
              path={properties[index % properties.length].path}
              id={properties[index % properties.length].id}
              bgColor={properties[index % properties.length].bgColor}
              fillColor={properties[index % properties.length].fillColor}
              favorite={film.title}
              setFav={() => updateFavorites(film)}
              isActive={isInFavorite(film)}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default PosterDisplay;
