import MD5 from "crypto-js/md5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MarvelChar() {
  const [data, setData] = useState({});
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
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };
  return (
    <div className="cmarvel">
      <Link to="/marvel">
        <img
          src={require("../img/marvel_logo.png")}
          alt="marvel"
          style={{ width: "400px" }}
        ></img>
      </Link>

      <div></div>
      {/* <input
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
      </button> */}
      <br />
      <br />
      <br />
      <div
        style={{
          color: "white",
            display: "flex",
            flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "15px solid blue",
          height: "100%",
          width: "100vw",
            // marginLeft: "50vw",
        }}
      >
        <h1 style={{ fontSize: "3vw" }}>{data?.data?.results[0]?.name}</h1>
        <img
          style={{ width: "400px" }}
          src={`${data?.data?.results[0]?.thumbnail.path}.${data?.data?.results[0]?.thumbnail.extension}`}
          alt={data?.data?.results[0]?.name}
        />
        <h2 style={{ width:'75vw' }}>{data?.data?.results[0]?.description}</h2>
        <div>
          <div className="mchar">
            <div>
              <h2>Comics</h2>
              {data?.data?.results[0]?.comics?.items.map((x) => {
                return <p>{x.name}</p>;
              })}
            </div>
            <div>
              <h2>Events</h2>
              {data?.data?.results[0]?.events?.items.map((x) => {
                return <p>{x.name}</p>;
              })}
            </div>
            <div>
              <h2>Series</h2>
              {data?.data?.results[0]?.series?.items.map((x) => {
                return <p>{x.name}</p>;
              })}
            </div>
            <div>
              <h2>Stories</h2>
              {data?.data?.results[0]?.stories?.items.map((x) => {
                return <p>{x.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
