import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pokemons() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [pokemons, setPokemons] = useState("");
  let [pokemon, setPokemon] = useState("");
  let [filteredPokemons, setFilteredPokemons] = useState([]);
  let [pokeArr, setPokeArr] = useState([]);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0${pokemon}`;

    const dataFetch = async () => {
      console.log(url);
      const data = await (await fetch(url)).json();
      console.log(data);
      setData(data);
      if (data.results) {
        let pokeArr = data.results.map((x) => {
          const nurl = x.url;
          const number = nurl.split("/")[6];
          return {
            name: x.name,
            url: x.url,
            number: number,
          };
        });
        setPokeArr(pokeArr);
        console.log(pokeArr);
        let mapPokemon = data?.results?.map((x, i) => {
          // console.log(x);
          // console.log(i);
          const nurl = x.url;
          const number = nurl.split("/")[6];
          return (
            <div className="pokemon">
              <Link to={`/pokemon/${number}`}>
                <h1>{x.name}</h1>
              </Link>
              {/* <img src={x?.sprites?.front_default} alt={x.name}></img> */}
            </div>
          );
        });
        setFilteredPokemons(data.results);
        setPokemons(mapPokemon);
      } else {
        let mapPokemon = (
          <>
            <h1 style={{ color: "white" }}>{data.name}</h1>
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
          </>
        );

        setPokemons(mapPokemon);
      }
    };
    console.log(data);
    dataFetch();
  }, [pokemon]);

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
      <div className="continer-fluid d-flex justify-content-center ">
        <input
          className="input-group-text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            let f = pokeArr.filter((x) => x.name.includes(e.target.value));
            setPokemons(
              f.map((x) => {
                return (
                  <div>
                    <Link to={`/pokemon/${x.number}`}>
                      <h1>{x.name}</h1>
                    </Link>
                  </div>
                );
              })
            );
          }}
        />
        <button
          className="btn btn-outline-success"
          onClick={() => {
            setPokemon(input);
          }}
        >
          Submit
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly">{pokemons}</div>
    </div>
  );
}
