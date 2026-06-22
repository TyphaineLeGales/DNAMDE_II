import CardList from './components/CardList';
import filmData from './assets/filmData.json?raw';
import './App.css'

const jsonData = JSON.parse(filmData);
console.log(jsonData)

function App() {
  return (
    <div id='app'>
      <CardList cards={jsonData}/>
    </div>
  )
}

export default App
