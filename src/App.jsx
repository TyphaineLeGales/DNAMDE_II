import filmData from './assets/filmData.json?raw';
import FilmList from './components/filmList'


const jsonData = JSON.parse(filmData);
console.log(filmData)

function App() {

  return (
    <div className='films-container'>
      <FilmList film={jsonData}/>
    </div>
  )

}

export default App
