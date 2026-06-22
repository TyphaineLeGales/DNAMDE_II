import Card from "./Card"
import "./app.css"
import filmData from "./assets/filmData.json?raw"




function App() {
  const FILMDATA = filmData
  return (
    <div className="movies-container">
      {FILMDATA.map((n) => (<Card key={n.title} title={n.title} />))}

      <Card />
    </div>
  )
}

export default App
