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
      <h1>{data.name && <div>{data.name}</div>}</h1>
      {data.sprites && (
        <img
          style={{ width: "30vh", height: "30vh" }}
          src={data.sprites.front_default}
          alt={data.name}
        />
      )}
      {data.sprites && (
        <img
          style={{ width: "30vh", height: "30vh" }}
          src={data.sprites.back_default}
          alt={data.name}
        />
      )}
      <div></div>
    </div>
  );
}
