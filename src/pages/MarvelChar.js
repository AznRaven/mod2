import MD5 from "crypto-js/md5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MarvelChar() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("hulk");
  let { symbol } = useParams();


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
      let base = `https://gateway.marvel.com/v1/public/characters/`;
      let url = `${base}${symbol}?ts=${ts}&apikey=${key1}&hash=${hash}&limit=100`;

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
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
              
            }}
          >
              return (
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid white",
                    // marginLeft: "auto"
                  }}
                >
                    
                  <h1>{data.data.results[0].name}</h1>
                  <img
                    style={{ width: "300px" }}
                    src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
                    alt={data.data.results[0].name}
                    />
                  <p>{data.data.results[0].description}</p>
                </div>
              );
          </div>

          <div></div>
        </>
      )}
    </div>
  );
}
