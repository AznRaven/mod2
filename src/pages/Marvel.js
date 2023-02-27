import MD5 from "crypto-js/md5";
import { useEffect, useState } from "react";

export default function Marvel() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("hulk");

  // const key = process.env.REACT_APP_MARVEL_PUBLIC
  let key1 = process.env.REACT_APP_MARVEL_PUBLIC;
  let key2 = process.env.REACT_APP_MARVEL_PRIVATE;
  // const key2 = 'd6c0de73a23068a4c73d89bf58711ceee3db4c6c'
  // console.log(`key: ${key}`)
  //   let name = "hulk";

  // let url = "https://gateway.marvel.com/v1/public/characters?ts=1677288929357&apikey=9da9b4d0b8052b3b63f400662c7f73b0&hash=5b35bc4f70c1422e4d6094611017e24b"
  //   let url = `{${base}?ts=${ts}&apikey=${key1}&hash=${hash}&nameStartsWith=${name}}`;

  useEffect(() => {
    dataFetch();
  }, [name]);

  const dataFetch = async () => {
    try {
      let ts = Number(new Date());
      let hash = MD5(ts + key2 + key1).toString();
      let base = `http://gateway.marvel.com/v1/public/characters`;
      //   let url = `{${base}?ts=${ts}&apikey=${key1}&hash=${hash}&name=${name}`
      let url = `${base}?ts=${ts}&apikey=${key1}&hash=${hash}&limit=100&nameStartsWith=${encodeURIComponent(
        name
      )}`;
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
    <>
      <h1>Marvel</h1>

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
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
    </>
  );
}
