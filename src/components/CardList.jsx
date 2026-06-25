import Card from './Card';
import './CardList.css';

export default function CardList(props) {
  const cards = props.cards.length > 0
    ? props.cards.map((card, i) => <Card data={card} key={i}/>)
    : (<p>No movie found</p>)

  return (
    <div className="cardList">
      {cards}
    </div>
  )
}