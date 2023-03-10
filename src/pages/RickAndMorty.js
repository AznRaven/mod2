import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RickAndMorty() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dataFetch();
  }, [name]);

  useEffect(() => {
    if (next) {
      const nUrl = new URL(next);
      setPage(nUrl.searchParams.get("page"));
    }
  }, [next]);

  const dataFetch = async () => {
    try {
      let search = `?name=${name}`;
      let base = `https://rickandmortyapi.com/api`;
      let url = `${base}/character/${search}`;

      console.log(url);

      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log("next");
      setNext(data.info.next);
      setPrev(data.info.prev);
      console.log(next);
      console.log(data);

      setError(null); // reset error state
    } catch (error) {
      console.error(`error: ${error}`);
      setError(error.message);
    }
  };

  const nextPage = async () => {
    try {
      const response = await fetch(next);
      const data = await response.json();
      setData(data);
      setNext(data.info.next);
      setPrev(data.info.prev);
      console.log("next");
      console.log(next);
      console.log(data);

      setError(null); // reset error state
    } catch (error) {
      console.error(`error: ${error}`);
      setError(error.message);
    }
  };
  const goPage = async (e) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${e.target.value}`
      );
      const data = await response.json();
      setData(data);
      setNext(data.info.next);
      setPrev(data.info.prev);
      console.log("next");
      console.log(next);
      console.log(data);

      setError(null); // reset error state
    } catch (error) {
      console.error(`error: ${error}`);
      setError(error.message);
    }
  };
  const prevPage = async () => {
    try {
      const response = await fetch(prev);
      const data = await response.json();
      setData(data);
      setNext(data.info.next);
      setPrev(data.info.prev);
      console.log("next");
      console.log(next);

      setError(null); // reset error state
    } catch (error) {
      console.error(`error: ${error}`);
      setError(error.message);
    }
  };

  return (
    <div className="cmarvel">
      <img
        src={require("../img/rick.png")}
        alt="marvel"
        style={{ width: "400px" }}
      ></img>
      <div></div>
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
          className="btn btn-outline-info"
          onClick={(e) => {
            setName(input);
            console.log(name);
          }}
        >
          Submit
        </button>
      </div>
      <br />
      {data?.info?.prev && (
        <button className="btn btn-outline-info" onClick={prevPage}>
          Prev
        </button>
      )}
      {Number(page) + 1 <= data?.info?.pages && (
        <button
          className="btn btn-outline-info"
          value={Number(page) + 1}
          onClick={goPage}
        >
          {Number(page) + 1}
        </button>
      )}
      {Number(page) + 2 <= data?.info?.pages && (
        <button
          className="btn btn-outline-info"
          value={Number(page) + 2}
          onClick={goPage}
        >
          {Number(page) + 2}
        </button>
      )}
      {Number(page) + 3 <= data?.info?.pages && (
        <button
          className="btn btn-outline-info"
          value={Number(page) + 3}
          onClick={goPage}
        >
          {Number(page) + 3}
        </button>
      )}
      {Number(page) + 4 <= data?.info?.pages && (
        <button
          className="btn btn-outline-info"
          value={Number(page) + 4}
          onClick={goPage}
        >
          {Number(page) + 4}
        </button>
      )}
      {Number(page) + 5 <= data?.info?.pages && (
        <button
          className="btn btn-outline-info"
          value={Number(page) + 5}
          onClick={goPage}
        >
          {Number(page) + 5}
        </button>
      )}
      {data?.info?.next && (
        <button className="btn btn-outline-info" onClick={nextPage}>
          Next
        </button>
      )}
      <br />
      <br />
      {error && <div>Error: {error}</div>}
      {data.results && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
              color: "white",
            }}
          >
            {data.results.map((x, i) => {
              return (
                <Link key={x.id} to={`/rick_morty/${x.id}`}>
                  <div
                    key={x.id}
                    style={{
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid white",
                    }}
                  >
                    <div className="d-flex">
                      <div className="me-5">
                        <h1>{x.name}</h1>
                        <img
                          style={{ width: "200px" }}
                          src={x.image}
                          alt={x.name}
                        />
                      </div>
                      {/* <div>
                        <p>Origin: {x.origin.name}</p>
                        <p>Gender: {x.gender}</p>
                        <p>Location: {x.location.name}</p>
                        <p>Species: {x.species}</p>
                        <p>Status: {x.status}</p>
                      </div> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div>
            {data?.info?.prev && (
              <button className="btn btn-outline-info" onClick={prevPage}>
                Prev
              </button>
            )}
            {Number(page) + 1 <= data?.info?.pages && (
              <button
                className="btn btn-outline-info"
                value={Number(page) + 1}
                onClick={goPage}
              >
                {Number(page) + 1}
              </button>
            )}
            {Number(page) + 2 <= data?.info?.pages && (
              <button
                className="btn btn-outline-info"
                value={Number(page) + 2}
                onClick={goPage}
              >
                {Number(page) + 2}
              </button>
            )}
            {Number(page) + 3 <= data?.info?.pages && (
              <button
                className="btn btn-outline-info"
                value={Number(page) + 3}
                onClick={goPage}
              >
                {Number(page) + 3}
              </button>
            )}
            {Number(page) + 4 <= data?.info?.pages && (
              <button
                className="btn btn-outline-info"
                value={Number(page) + 4}
                onClick={goPage}
              >
                {Number(page) + 4}
              </button>
            )}
            {Number(page) + 5 <= data?.info?.pages && (
              <button
                className="btn btn-outline-info"
                value={Number(page) + 5}
                onClick={goPage}
              >
                {Number(page) + 5}
              </button>
            )}
            {data?.info?.next && (
              <button className="btn btn-outline-info" onClick={nextPage}>
                Next
              </button>
            )}
          </div>
        </>
      )}
      {/* Sidebar */}
      <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">
              Settings
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </div>
        </div>
        {/* Sidebar */}
    </div>
  );
}
