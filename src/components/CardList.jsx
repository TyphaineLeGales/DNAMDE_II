import Card from './Card';
import './Card.css'

export default function CardList(props) {
  return (
    <div className="cardList">
      {props.cards.map((card, i) => <Card data={card} key={i}/>)}
    </div>
  )
}