import { useEffect, useState } from "react";

export default function Giphy() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("random");

  //   let key = 'HDeTBIMuoBW6DtzdV9Ui71Wvx36yPMav';
  let key = process.env.REACT_APP_KEY;
  console.log(key);
  useEffect(() => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`;
    const dataFetch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    };

    dataFetch();
  }, [search]);

  return (
    <div className="cmarvel">
      <img
        src={require("../img/giphy.png")}
        alt="giphy"
        style={{ width: "auto" }}
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
          }}
        />
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            setSearch(input);
          }}
        >
          Submit
        </button>
      </div>

      <br />
      <br />
      <br />
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "20px",
          }}
        >
          {data.map((gif) => (
            <div>
              <img
                key={gif.id}
                src={gif.images.fixed_height.url}
                alt={gif.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
