import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid h-100 d-flex flex-column text-center justify-content-around align-items-center border border-primary">
        <div className="row align-items-center container-fluid justify-content-around" style={{height: "44vh"}}>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/giphy">
              <img
                src={require("../img/giphy.png")}
                alt="giphy"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/marvel">
              <img
                src={require("../img/marvel_logo.png")}
                alt="marvel"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/news">
              <img
                src={require("../img/news.png")}
                alt="news"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
        </div>
        <div className="row align-items-center container-fluid justify-content-around" style={{height: "44vh"}}>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/pokemons">
              <img
                src={require("../img/pokemon.png")}
                alt="pokemon"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/rick_morty">
              <img
                src={require("../img/rick.png")}
                alt="pokemon"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
          <div className="col-4 shadow-lg w-25 img-thumbnail border-danger  border-5 rounded-5">
            <Link to="/weather">
              <img
                src={require("../img/weather.png")}
                alt="weather"
                style={{ width: "200px" }}
              ></img>
            </Link>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
