import Tag from "./Tag";
import { useState, useEffect} from "react";

function TagList({ onSelect }) {
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

  const types = films.flatMap((film) => film.producer.split(", "));

  const typesTag = [...new Set(types)];

  return (
    <div className="tag-list">
      
        {dataLoad &&
          typesTag.map((filmType) => (
            <Tag onSelect={onSelect} key={filmType} tag={filmType} />
          ))}
    
    </div> 
  );
}

export default TagList;
