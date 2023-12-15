import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Table.css";

const CatDetailPage = ({  }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

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

  const breedId = id;
  const breed = data.find((b) => b.id === breedId);

  if (!breed) {
    return <div>Loading....</div>;
  }

  return (
    <div className="page">
      <h2>About cat</h2>
      <div className="card-detail">
        <img
          className="images"
          src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
          alt="images"
        />
        <div className="content">
          <div>Name: {breed.name}</div>
          <div>Origin: {breed.origin}</div>
          <div>Weight: {breed.weight?.metric}</div>
          <div>Hairless: {breed.hairless ? "No" : "Yes"}</div>
          <a href={breed.wikipedia_url}>{"Wiki Link"}</a>
        </div>
      </div>
    </div>
  );
};

export default CatDetailPage;
