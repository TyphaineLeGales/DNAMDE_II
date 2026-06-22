import Card from "./Card"
import "./app.css"
import filmData from "./assets/filmData.json?raw"




function App() {
  const FILMDATA = filmData
  const data = typeof FILMDATA === "string" ? JSON.parse(FILMDATA) : FILMDATA

  return (
    <div className="movies-container">
      {data.map((item, i) => (
        <Card key={item.id ?? i} {...item} />
      ))}
    </div>
  )
}

export default App
