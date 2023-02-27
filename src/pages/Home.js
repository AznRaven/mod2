import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
        display: "flex"
    }}>
      <Link to="/giphy">
        <h1>Giphy</h1>
      </Link>
      <Link to="/marvel">
      <img
        src={require("../img/marvel_logo.png")}
        alt="marvel"
        style={{ width: "200px" }}
      ></img>

      </Link>
      <Link to="/news">
        <h1>News</h1>
      </Link>
      <Link to="/pokemons">
        <h1>Pokemon</h1>
      </Link>
      <Link to="/weather">
        <h1>Weather</h1>
      </Link>
    </div>
  );
}
