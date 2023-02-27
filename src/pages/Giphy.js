import { useEffect, useState } from "react";

export default function Giphy() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('random');
  const [search, setSearch] = useState('');

//   let key = 'HDeTBIMuoBW6DtzdV9Ui71Wvx36yPMav';
  let key = process.env.REACT_APP_KEY;
console.log(key)
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
    <>
      <h1>Giphy</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
            setSearch(input);
        }}
      >
        Submit
      </button>
      <br />
      <div className="articleC">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: "20px",
          }}
        >
          {data.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      </div>
    </>
  );
}
