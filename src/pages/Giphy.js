import { useEffect, useState } from "react";

export default function Giphy() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("random");
  const [isGiphyChecked, setIsGiphyChecked] = useState(true);

  const apiType = isGiphyChecked ? "gifs" : "stickers";
  const apiEndpoint = isGiphyChecked ? "search" : "search";

  let key = process.env.REACT_APP_KEY;

  useEffect(() => {
    let url = `https://api.giphy.com/v1/${apiType}/${apiEndpoint}?q=${search}&limit=100&api_key=${key}`;

    const dataFetch = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
      console.log(data)
    };

    dataFetch();
  }, [search, apiType, apiEndpoint, key]);

  return (
    <div className="cmarvel">
      <div className="">
        <img
          src={require("../img/giphy.png")}
          alt="giphy"
          style={{ width: "auto" }}
        ></img>
        <br />
        <div className="d-flex justify-content-center">
          {/* Giphy / Sticker */}
          <div className="d-flex">
            <div class="form-check me-5">
              <input
                class="form-check-input"
                type="radio"
                name="apiType"
                id="giphys"
                value="gifs"
                checked={isGiphyChecked}
                onChange={() => setIsGiphyChecked(true)}
              />
              <label class="form-check-label" for="giphys">
                Giphy
              </label>
            </div>
            <div class="form-check me-5">
              <input
                class="form-check-input"
                type="radio"
                name="apiType"
                id="stickers"
                value="stickers"
                checked={!isGiphyChecked}
                onChange={() => setIsGiphyChecked(false)}
              />
              <label class="form-check-label" for="stickers">
                Sticker
              </label>
            </div>
          </div>
          {/* Giphy / Sticker */}
        </div>
      </div>
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
            gridTemplateColumns: "repeat(5, 1fr)",
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
