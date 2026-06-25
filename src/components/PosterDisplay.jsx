import { useEffect, useState } from "react";
import "../ClippedPoster.css";
import ClippedPoster from "./ClippedPoster";
import properties from "./ClippedProperties.json";

function PosterDisplay() {
  const [films, setFilms] = useState([]);


  useEffect(() => {
    const url = "https://ghibliapi.vercel.app/films/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFilms(json);
      });
  }, []);



  return (
    <>
      <section>
        {films.slice(0, 10).map((film, index) => (
          <ClippedPoster
            key={film.title}
            image={film.image}
            path={properties[index % properties.length].path}
            id={properties[index % properties.length].id}
            bgColor={properties[index % properties.length].bgColor}
            fillColor={properties[index % properties.length].fillColor}
          />
        ))}
      </section>
    </>
  );
}

export default PosterDisplay;
