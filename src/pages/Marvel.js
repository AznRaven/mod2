import MD5 from "crypto-js/md5";
import { useEffect, useState } from "react";
export default function Marvel() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("hulk");

  let key1 = process.env.REACT_APP_MARVEL_PUBLIC;
  let key2 = process.env.REACT_APP_MARVEL_PRIVATE;

  useEffect(() => {
    dataFetch();
  }, [name]);

  const dataFetch = async () => {
    try {
      let ts = Number(new Date());

      console.log(ts);

      let hash = MD5(ts + key2 + key1).toString();
      let base = `http://gateway.marvel.com/v1/public/characters/`;
      let url = `${base}?ts=${ts}&apikey=${key1}&hash=${hash}&limit=100&nameStartsWith=${name}`;

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
        src={require("../img/marvel_logo.png")}
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
      <br/>
      <br/>
      <br/>
      {error && <div>Error: {error}</div>}
      {data?.data?.results && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "20px",
              
            }}
          >
            {data.data.results.map((x, i) => {
              return (
                <div
                  key={x.id}
                  style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid white"
                  }}
                >
                  <h1>{x.name}</h1>
                  <img
                    style={{ width: "200px" }}
                    src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
                    alt={x.name}
                  />
                  <p>{x.description}</p>
                </div>
              );
            })}
          </div>

          <div></div>
        </>
      )}
    </div>
  );
}
