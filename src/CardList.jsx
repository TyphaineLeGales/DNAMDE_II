import Card from"./card.css";

import jsonFilm from "./assets/filmData.json?raw";
const filmData =  JSON.parse(jsonFilm)

function CardList({ films = filmData }) {
  return (
  <div className="movies-container">
    {films.map((filmData) => (
      <Card data={filmData} />
    ))}
  </div>)
}

export default CardList;
