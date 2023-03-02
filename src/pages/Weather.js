import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState({
    weather: [{ main: "", description: "" }],
    wind: { deg: "", gust: "", speed: "" },
  });

  const [city, setCity] = useState("dallas");
  const [input, setInput] = useState("");

  // const key = process.env.REACT_APP_MARVEL_PUBLIC
  let key = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {
    const dataFetch = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(`error: ${error}`);
      }
    };

    dataFetch();
  }, [city]);

  return (
    <>
      <img
        src={require("../img/weather.png")}
        alt="weather"
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
          }}
        />
        <button
          className="btn btn-outline-danger"
          onClick={(e) => {
            setCity(input);
          }}
        >
          Submit
        </button>
      </div>
      <h1 style={{fontSize:"8vh"}}>{data?.name}</h1>
      <br />
      <div className="d-flex justify-content-center">
        <div>
          <h1>Temperature</h1>
          <br />

          <h2>
            Current Temp:
            {Math.floor((data?.main?.temp - 273.15) * (9 / 5) + 32)}
          </h2>

          <h2>
            Feels Like:
            {Math.floor((data?.main?.feels_like - 273.15) * (9 / 5) + 32)}
          </h2>

          {<h2>Humidity: {Math.floor(data?.main?.humidity)}</h2>}
          {/* (0K − 273.15) × 9/5 + 32 */}
          {<h2>Pressure: {data?.main?.pressure}</h2>}
        </div>
        <div className="mx-5">
          <h1>Weather</h1>
          <br />

          {data.weather[0] && <h2>{data.weather[0].main}</h2>}
          {data.weather[0] && (
            <h2>Description: {data.weather[0].description}</h2>
          )}
          
        </div>
        <div>
            <h1>Wind:</h1>
            {data.wind && <h2>Degree: {data.wind.deg}</h2>}
            {data.wind && <h2>Speed: {data.wind.speed}</h2>}
          </div>
      </div>
    </>
  );
}
