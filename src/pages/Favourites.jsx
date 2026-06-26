import CardList from '../components/CardList';
import NavHeader from '../components/NavHeader'
import LightDarkButton from '../components/LightDarkButton'
import { useEffect, useRef, useState } from 'react';
import { getStorage } from '../utils/storage';
import { jsonData } from '../main';

function Favourites() {
  const [filtered, setFiltered] = useState(jsonData.filter(film => getStorage(film.id).isLiked));

  return (
    <div id='app'>
      <NavHeader />
      <LightDarkButton />
      <CardList cards={filtered}/>
    </div>
  )
}

export default Favourites
