import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../getDogDetail/dogDetail.module.css";

export default function DogDetail() {
  const [dog, setDog] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/dogs/${id}`).then((response) => {
      setDog(response.data);
    });
    return () => {
      setDog(null);
    };
  }, []);

  return (
    <div className={style.divOrder}>
      {dog ? (
        <>
          <div className={style.imgContainer}>
            <img
              className={style.imgDogs}
              src={dog.image}
              alt=""
              value={dog.name}
            />
          </div>
          <div className={style.dataOrder}>
            <h3>{dog.name}</h3>
            <p>Metric: {dog.weight}</p>
            <p>{dog.temperament}</p>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
