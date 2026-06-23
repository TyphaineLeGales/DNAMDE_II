import CardList from './components/CardList';
import GenreChip from './components/GenreChip'
import filmData from './assets/filmData.json?raw';
import './App.css'
import { useEffect, useRef, useState } from 'react';

let jsonData = JSON.parse(filmData);
console.log(jsonData)



function App() {
  const input = useRef(null);
  const [filtered, setFiltered] = useState(jsonData);
  const [selectedGenre, setSelectedGenre] = useState('All');


  useEffect(() => {
    handleSearch()
  }, [selectedGenre])


  const handleSearch = (e, search = input.current.value, genre = selectedGenre) =>
    setFiltered( jsonData.filter(entry => entry.Title.toLowerCase().includes(search.toLowerCase()) && (genre === 'All' ? true : entry.Genre.includes(genre)) ) );

  const handleGenre = (value) => setSelectedGenre(value);

  const handleLightDark = (e) => console.log(e);

  const genres = filtered.map(card => card.Genre.split(', '));
  const genresSet = new Set(['All', ...genres.flat()]);

  return (
    <div id='app'>
      <button type='button' id='light-dark-button' onClick={handleLightDark}>Set Light/Dark</button>
      <input ref={input} type="search" id='searchbar' placeholder='Search For A Movie' onChange={handleSearch} />
      <div className='genre-chip-list'>
        { Array.from(genresSet).map((genre, i) => <GenreChip key={i} name={genre} selected={selectedGenre === genre} setSelectedGenreCallback={handleGenre}/>) }
      </div>
      <CardList cards={filtered}/>
    </div>
  )
}

export default App
