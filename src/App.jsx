import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Search from './components/Search';
import Favorites from './components/Favorites';
import './index.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activePage, setActivePage] = useState('search');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (filmId) => {
    setFavorites((prev) =>
      prev.includes(filmId)
        ? prev.filter((id) => id !== filmId)
        : [...prev, filmId]
    );
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>🎬 My Movies</h1>
        <nav>
          <button
            className={activePage === 'search' ? 'active' : ''}
            onClick={() => setActivePage('search')}
          >
            🔍 Search
          </button>
          <button
            className={activePage === 'favorites' ? 'active' : ''}
            onClick={() => setActivePage('favorites')}
          >
            ❤️ Favorites ({favorites.length})
          </button>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      {activePage === 'search' ? (
        <Search favorites={favorites} onToggleFavorite={toggleFavorite} />
      ) : (
        <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
      )}
    </div>
  );
}

export default App;