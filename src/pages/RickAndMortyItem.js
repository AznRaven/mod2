import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RickAndMortyItem() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("rick");
  let { symbol } = useParams();

  useEffect(() => {
    dataFetch();
  }, [name]);

  const dataFetch = async () => {
    try {
      let base = `https://rickandmortyapi.com/api`;
      let url = `${base}/character/${symbol}`;

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
      {data && (
        <div style={{
            height:"100vh",
          }}>
          <div
            style={{
              //   display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                color: "white",
              }}
            >
              {data && data.name}
            </h1>
            <img style={{ width: "200px" }} src={data.image} alt={data.name} />
            <div
              style={{
                color: "white",
              }}
            >
              {data && <p>Species: {data.species}</p>}
              {data.origin && <p>Origin: {data.origin.name}</p>}
              {data && <p>Gender: {data.gender}</p>}
              {data && <p>Status: {data.status}</p>}
              {data && <p>Location: {data.location && data.location.name}</p>}
            </div>
          </div>

          <div></div>
        </div>
      )}
    </div>
  );
}
