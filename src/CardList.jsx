import "./card.css";
import Card from "./Card";

//function CardList({ films = filmData }) {
function CardList(props) {
  console.log(props.films);
  return (
    <div className="movies-container">
      {props.films.map((filmData) => (
        <Card data={filmData} />
      ))}
    </div>
  );
}

export default CardList;
