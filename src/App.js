import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Giphy from "./pages/Giphy";
import Marvel from "./pages/Marvel";
import MarvelChar from "./pages/MarvelChar";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import About from './pages/About';
import RickAndMorty from './pages/RickAndMorty';
import RickAndMortyItem from './pages/RickAndMortyItem';

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/giphy' element={<Giphy/>} />
        <Route path="/marvel" element={<Marvel/>} />
        <Route path="/marvel_char/:symbol" element={<MarvelChar/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/pokemons" element={<Pokemons/>} />
        <Route path="/pokemon/:symbol" element={<Pokemon/>} />
        <Route path="/rick_morty" element={<RickAndMorty/>} />
        <Route path="/rick_morty/:symbol" element={<RickAndMortyItem/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}
