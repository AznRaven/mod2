import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/giphy">
        <h1>Giphy</h1>
      </Link>
      <Link to="/marvel">
        <h1>Marvel</h1>
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
    </>
  );
}
