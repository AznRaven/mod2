import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  let [data, setData] = useState({});
  let [input, setInput] = useState("");
  let [pokemon, setPokemon] = useState("");
  let { symbol } = useParams();

  let url = `https://pokeapi.co/api/v2/pokemon/${symbol}`;

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    dataFetch();
  }, [url]);

  return (
    <div className="cpoke">
      <img
        src={require("../img/pokemon.png")}
        alt="pokemon"
        style={{ width: "400px" }}
      ></img>
      <br />
      <br />
      <br />
      <div></div>
      <div className="continer-fluid d-flex justify-content-center ">
        <input
          className="input-group-text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-danger"
          onClick={(e) => {
            setPokemon(input);
          }}
        >
          Submit
        </button>
      </div>
      
      <div>
      <h1 style={{color: 'white'}}>{data.name}</h1>
            <div>
              {data.sprites?.front_default&&<img src={data.sprites?.front_default} alt={data.name}></img>}
              {data.sprites?.front_shiny&&<img src={data.sprites?.front_shiny} alt={data.name}></img>}
              {data.sprites?.front_female && <img src={data.sprites?.front_female} alt={data.name}></img>}
              {data.sprites?.front_shiny_female && <img src={data.sprites?.front_shiny_female} alt={data.name}></img>}
            </div>
            <div>
              {data.sprites?.back_default&&<img src={data.sprites?.back_default} alt={data.name}></img>}
              {data.sprites?.back_shiny&&<img src={data.sprites?.back_shiny} alt={data.name}></img>}
              {data.sprites?.back_female&&<img src={data.sprites?.back_female} alt={data.name}></img>}
              {data.sprites?.back_shiny_female&&<img src={data.sprites?.back_shiny_female} alt={data.name}></img>}
            </div>
      </div>
    </div>
  );
}
