import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Giphy from "./pages/Giphy";
import Marvel from "./pages/Marvel";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import About from './pages/About';

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/giphy' element={<Giphy/>} />
        <Route path="/marvel" element={<Marvel/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/pokemons" element={<Pokemons/>} />
        <Route path="/pokemon/:symbol" element={<Pokemon/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}
