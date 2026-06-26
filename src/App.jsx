import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
/* import FilmDisplay from './components/FilmDisplay' */
/* import PosterDisplay from "./components/PosterDisplay"; */
import PosterPage from "./components/PosterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PosterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
