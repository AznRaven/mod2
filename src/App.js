import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Marvel from "./pages/Marvel";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={Home} />
        <Route path="/marvel" element={Marvel} />
      </Routes>
    </div>
  );
}

export default App;
