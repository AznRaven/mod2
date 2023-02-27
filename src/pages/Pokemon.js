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
      console.log(data)
    };
    dataFetch();
  }, [url]);

  return (
    <>

      <h1>Pokemon</h1>
      <h1>{data.name}</h1>
      {data.sprites && <img style={{ width: '30vh', height: '30vh' }} src={data.sprites.front_default} alt={data.name} />}
      {data.sprites && <img style={{ width: '30vh', height: '30vh' }} src={data.sprites.back_default} alt={data.name} />}
        <div>

        </div>
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
    </>
  );
}
