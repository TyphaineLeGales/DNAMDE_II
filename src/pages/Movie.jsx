import CardList from '../components/CardList';
import Card from '../components/Card';
import GenreChip from '../components/GenreChip'
import NavHeader from '../components/NavHeader'
import LightDarkButton from '../components/LightDarkButton'
import { useEffect, useRef, useState } from 'react';
import { getStorage } from '../utils/storage';
import { jsonData } from '../main';
import { useParams } from "react-router";

export default function Movie() {
  let { id } = useParams();
  const cardData = jsonData.find(film => film.id === id);

  return (
    <div id='app'>
      {!cardData
      ? <p>No movie found with the specified ID</p>
      : <Card data={cardData}/>}
    </div>
  )
}
