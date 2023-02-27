import { useEffect, useState } from "react";

export default function News() {
  const [data, setData] = useState([]);

  let key = "4e87a7ce22884bf99edf5be728a28484";

  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
  console.log(url);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      console.log(data.articles);
      setData(data);
      let mapNews = await data.articles.map((x, i) => {
        return (
          <div className="article">
            <h2>{x.title}</h2>
            <a href={x.url} target="_blank" rel="noreferrer">
              <img src={x.urlToImage} alt={x.title}></img>
            </a>
          </div>
        );
      });
      setData(mapNews);
    };

    dataFetch();
  }, []);

  return (
    <>
      <h1>News</h1>
    <div className="articleC">
      {data}
    </div>
    </>
    
  );
}
