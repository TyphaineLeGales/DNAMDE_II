import { useEffect, useState } from "react";
import "../ClippedPoster.css";
import ClippedPoster from "./ClippedPoster";
import properties from "./ClippedProperties.json";
import InputBar from "./InputBar";

function PosterDisplay(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.vercel.app/films/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFilms(json);
      });
  }, []);

  const [value, setValue] = useState(" ");

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

  return (
    <>
      {props.condition ? (
        <>
          <InputBar valueChange={handleChange}></InputBar>
          <section>
            {ghibliFilms.slice(0, 8).map((film, index) => (
              <ClippedPoster
                key={film.title}
                image={film.image}
                path={properties[index % properties.length].path}
                id={properties[index % properties.length].id}
                bgColor={properties[index % properties.length].bgColor}
                fillColor={properties[index % properties.length].fillColor}
                posterInfo={film.title}
                keyItem={index}
              />
            ))}
          </section>
        </>
      ) : (
        console.log(localStorage)
      )}
    </>
  );
}

export default PosterDisplay;
