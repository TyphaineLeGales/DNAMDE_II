import CardList from './components/CardList';
import GenreChip from './components/GenreChip'
import NavHeader from './components/NavHeader'
import LightDarkButton from './components/LightDarkButton'
import './App.css'
import { useEffect, useRef, useState } from 'react';
import { jsonData } from './main';


function App() {
  const input = useRef(null);
  const [filtered, setFiltered] = useState(jsonData);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    handleSearch()
  }, [selectedGenre])

  const handleSearch = (e, search = input.current.value, genre = selectedGenre) =>
    setFiltered( jsonData.filter(entry => entry.title.toLowerCase().includes(search.toLowerCase()) && (genre === 'All' ? true : entry.producer.includes(genre) ?? true) ) );

  const handleGenre = (value) => setSelectedGenre(value);

  const handleLightDark = (e) => {
    const oldTheme = document.documentElement.style.getPropertyValue('--theme')
    document.documentElement.style.setProperty('--theme', oldTheme === 'light' ? 'dark' : 'light')
  };

  // const genres = filtered.map(card => card.Genre.split(', '));
  // const genresSet = new Set(['All', ...genres.flat()]);  
  const genres = filtered.reduce((prev, card) => { prev.push(card.producer); return prev }, []);
  const genresSet = new Set(['All', ...genres.flat()]);

  return (
    <div id='app'>
      <NavHeader />
      <LightDarkButton />

      <input ref={input} type="search" id='searchbar' placeholder='Search For A Movie' onChange={handleSearch} />
      <div className='genre-chip-list'>
        { Array.from(genresSet).map((genre, i) => <GenreChip key={i} name={genre} selected={selectedGenre === genre} setSelectedGenreCallback={handleGenre}/>) }
      </div>
      <CardList cards={filtered}/>
    </div>
  )
}

export default App
