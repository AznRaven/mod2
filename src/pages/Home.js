import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "20px",
    }}>
      <Link to="/giphy">
      <img
        src={require("../img/giphy.png")}
        alt="giphy"
        style={{ width: "200px" }}
      ></img>
      </Link>
      <Link to="/marvel">
      <img
        src={require("../img/marvel_logo.png")}
        alt="marvel"
        style={{ width: "200px" }}
      ></img>

      </Link>
      <Link to="/news">
      <img
        src={require("../img/news.png")}
        alt="news"
        style={{ width: "200px" }}
      ></img>
      </Link>
      <Link to="/pokemons">
      <img
        src={require("../img/pokemon.png")}
        alt="pokemon"
        style={{ width: "200px" }}
      ></img>
      </Link>
      <Link to="/rick_morty">
      <img
        src={require("../img/rick.png")}
        alt="pokemon"
        style={{ width: "200px" }}
      ></img>
      </Link>
      <Link to="/weather">
      <img
        src={require("../img/weather.png")}
        alt="weather"
        style={{ width: "200px" }}
      ></img>
      </Link>
    </div>
  );
}
