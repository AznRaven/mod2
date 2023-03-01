import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RickAndMorty() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    dataFetch();
  }, [name]);

  const dataFetch = async () => {
    try {
      let search = `?name=${name}`
      let base = `https://rickandmortyapi.com/api`;
      let url = `${base}/character/${search}`;

      console.log(url);

      const response = await fetch(url);
      const data = await response.json();
      setData(data);

      console.log(data);

      setError(null); // reset error state
    } catch (error) {
      console.error(`error: ${error}`);
      setError(error.message);
    }
  };
  return (
    <div className="cmarvel">
      <img
        src={require("../img/rick.png")}
        alt="marvel"
        style={{ width: "400px" }}
      ></img>
      <div></div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          setName(input);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <br />
      {error && <div>Error: {error}</div>}
      {data.results && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
              color: "white",
            }}
          >
            {data.results.map((x, i) => {
              return (

                  <Link to={`/rick_morty/${x.id}`}>
                <div
                  key={x.id}
                  style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid white",
                  }}
                >
                  <h1>{x.name}</h1>
                    <img
                      style={{ width: "200px" }}
                      src={x.image}
                      alt={x.name}
                    />
                </div>
                  </Link>
              );
            })}
          </div>

          <div>
            {data?.info?.prev && <button>Prev</button>}
            {data?.info?.next && <button>Next</button>}
          </div>
        </>
      )}
    </div>
  );
}
