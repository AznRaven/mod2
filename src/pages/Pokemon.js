import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


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
        <Link to='/pokemons'>
        <img
        src={require("../img/pokemon.png")}
        alt="pokemon"
        style={{ width: "400px" }}
      ></img>
        </Link>
      
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
        <br />
        <br />
        <h1 style={{ color: "white" }}>{data.name}</h1>
        <br />
        <br />
        <div className="d-flex justify-content-center">
          {/* pix */}
          <div>
            {/* pix front  */}
            <div>
              {data.sprites?.front_default && (
                <img src={data.sprites?.front_default} alt={data.name}></img>
              )}
              {data.sprites?.front_shiny && (
                <img src={data.sprites?.front_shiny} alt={data.name}></img>
              )}
              {data.sprites?.front_female && (
                <img src={data.sprites?.front_female} alt={data.name}></img>
              )}
              {data.sprites?.front_shiny_female && (
                <img
                  src={data.sprites?.front_shiny_female}
                  alt={data.name}
                ></img>
              )}
            </div>
            {/* pix back */}
            <div>
              {data.sprites?.back_default && (
                <img src={data.sprites?.back_default} alt={data.name}></img>
              )}
              {data.sprites?.back_shiny && (
                <img src={data.sprites?.back_shiny} alt={data.name}></img>
              )}
              {data.sprites?.back_female && (
                <img src={data.sprites?.back_female} alt={data.name}></img>
              )}
              {data.sprites?.back_shiny_female && (
                <img
                  src={data.sprites?.back_shiny_female}
                  alt={data.name}
                ></img>
              )}
            </div>
          </div>
          {/* data */}
          <div>
            <div style={{ color: "white" }}>Stats:</div>
            {data?.stats?.map((x) => {
              return (
                <p style={{ color: "white" }}>
                  {x.stat.name} : {x.base_stat}
                </p>
              );
            })}
          </div>
          <div>
            <div style={{ color: "white" }}>Abilities:</div>
            {data?.abilities?.map((x) => {
              return <p style={{ color: "white" }}>{x.ability.name}</p>;
            })}
          </div>
          <div>
            <div style={{ color: "white" }}>Games:</div>
            {data?.game_indices?.map((x) => {
              return <p style={{ color: "white" }}>{x.version.name}</p>;
            })}
          </div>
          <div>
            <div style={{ color: "white" }}>Moves:</div>
            {data?.moves?.map((x) => {
              return <p style={{ color: "white" }}>{x.move.name}</p>;
            })}
          </div>
          <div>
            <div style={{ color: "white" }}>Type:</div>
            {data?.types?.map((x) => {
              return (
                <p style={{ color: "white" }}>
                  {x.slot} : {x.type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
