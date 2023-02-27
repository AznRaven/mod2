import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState({
    weather: [{ main: '', description: '' }],
    wind: { deg: '', gust: '', speed: '' }
  });;

  // const key = process.env.REACT_APP_MARVEL_PUBLIC
  let key = process.env.REACT_APP_WEATHER_KEY;

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.91&lon=-123.31&appid=${key}`
  console.log(url)  

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3f87b54ebcf2b7c27c982c87154c8623');
        console.log(response);
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        console.error(`error: ${error}`);
      }

      //   const data = await (await fetch(url)).json();

      //   setData(data);
      //   let mapData = await data.results.map((x, i) => {
      //     return (
      //         <div>
      //         <img src={x.image} alt="{x.title}"></img>
      //         <div>{x.title}</div>
      //         </div>
      //     )
      //   });
      //   setData(mapData)
    };

    dataFetch();
  }, []);

  return (
    <>
      <h1>Weather</h1>
      <h1>Dallas</h1>
      {data.weather[0] && <h2>Main: {data.weather[0].main}</h2>}
      {data.weather[0] && <h2>Description: {data.weather[0].description}</h2>}
      <h1>Wind:</h1>
      {data.wind && <h2>Degree: {data.wind.deg}</h2>}
      {data.wind && <h2>Gust: {data.wind.gust}</h2>}
      {data.wind && <h2>Speed: {data.wind.speed}</h2>}

    </>
  );
}
