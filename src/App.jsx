import CardList from './components/CardList';
import filmData from './assets/filmData.json?raw';
import './App.css'
import { useState } from 'react';

let jsonData = JSON.parse(filmData);
console.log(jsonData)



function App() {
  const [filtered, setFiltered] = useState(jsonData);

  function handleChange(e) {
    console.log(e, e.target.value)
    setFiltered( jsonData.filter(entry => entry.Title.includes(e.target.value)/* .include(e.target.value) */) )
  }

  return (
    <div id='app'>
      <input type="search" id='searchbar' onChange={handleChange}/>
      <CardList cards={filtered}/>
    </div>
  )
}

export default App
