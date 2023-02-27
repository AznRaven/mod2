import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pokemons() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [pokemons, setPokemons] = useState("");
  let [pokemon, setPokemon] = useState("");

  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  useEffect(() => {
    
    const dataFetch = async () => {
      console.log(url);
      const data = await (await fetch(url)).json();
      console.log(data);
      setData(data);
      let mapPokemon = await data.results.map((x, i) => {
        console.log(x);
        return (
          <div className="pokemon">
            <Link to={`/pokemon/${i+1}`}>
              <h1>{x.name}</h1>
            </Link>
            {/* <img src={x.sprites.front_default} alt={x.name}></img> */}
          </div>
        );
      });
      setPokemons(mapPokemon);
    };
    console.log(data);
    dataFetch();
  }, [url]);

  return (
    <div className="cpoke">
      <h1>Pokemon</h1>
      {pokemons}
      {/* <Link to='/pokemon/:{1}'> */}
      {/* <h1>{data.results[0].name}</h1> */}
      {/* </Link> */}
      {/* <img src={data.sprites.front_default} alt={data.name}></img>
      <img src={data.sprites.back_default} alt={data.name}></img> */}

      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          setPokemon(input);
        }}
      >
        Submit
      </button>
      {/* <div className="articleC"> */}
      {/* {data} */}
      {/* </div> */}
    </div>
  );
}
