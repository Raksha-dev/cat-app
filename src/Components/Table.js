import { useState, useEffect } from "react";
import styles from "./Table.css";
import { Link } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function catDatas() {
      const catData = await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=10&page=0"
      );
      const jsonData = await catData.json();
      setData(jsonData);
    }
    catDatas();
  }, []);

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="column">
            <div className="name">Breed Name</div>
            {data.map((breedName) => {
              return (
                <div key={breedName.id} className="row">
                  <Link to={`/breeds/${breedName.id}`}>{breedName.name}</Link>
                </div>
              );
            })}
          </div>
          <div className="column">
            <div className="name">Breed Origin</div>
            {data.map((breedOrigin) => {
              return (
                <div className="row" key={breedOrigin.id}>
                  {breedOrigin.origin}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
