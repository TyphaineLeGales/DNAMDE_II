import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Favourites from './pages/Favourites.jsx'
import Movie from './pages/Movie.jsx'

const result = await fetch('https://ghibliapi.vercel.app/films/')
export const jsonData = await result.json();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);