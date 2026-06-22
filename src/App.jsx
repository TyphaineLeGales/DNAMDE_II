import CardList from './components/CardList';
import GenreChip from './components/GenreChip'
import filmData from './assets/filmData.json?raw';
import './App.css'
import { useRef, useState } from 'react';

let jsonData = JSON.parse(filmData);
console.log(jsonData)



function App() {
  const input = useRef(null);
  const [filtered, setFiltered] = useState(jsonData);
  const [selectedGenre, setSelectedGenre] = useState('All');

  function handleSearch() {
    console.log(input.current, input.current.value)
    
    setFiltered( jsonData.filter(entry => entry.Title.includes(input.current.value) && (selectedGenre === 'All' ? true : entry.Genre.includes(selectedGenre)) ) )
  }

  function handleGenre(value) {
    setSelectedGenre(value)
  }

  const genres = filtered.map(card => card.Genre.split(', '));
  const genresSet = new Set(['All', ...genres.flat()]);
  console.log(genresSet)

  return (
    <div id='app'>
      <input ref={input} type="search" id='searchbar' onChange={handleSearch}/>
      <div className='genre-chip-list'>
        { Array.from(genresSet).map(genre => <GenreChip name={genre} selected={selectedGenre === genre} setSelectedGenreCallback={handleGenre}/>) }
      </div>
      <CardList cards={filtered}/>
    </div>
  )
}

export default App
