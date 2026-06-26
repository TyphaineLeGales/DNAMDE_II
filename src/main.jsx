import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import PageFavorite from './compoments/favoritePage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      < Routes >
      < Route path = " / " element = { <App /> } />    
      < Route path = " /favorite " element = { <PageFavorite /> } />     
    </ Routes >
    </StrictMode>

  </BrowserRouter>


)
