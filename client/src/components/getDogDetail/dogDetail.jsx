import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../getDogDetail/dogDetail.module.css";
import Nav from "../navBar/navBar";

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
  }, 
  // eslint-disable-next-line 
  []);
  
  return (
    <div>
      <div><Nav/></div>
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
            <h4>Weight</h4>
            <p>Min: {dog.weight.split('-')[0]} Max: {dog.weight.split('-')[1]}</p>
            <h4>Height</h4>
            <p>Min: {dog.height.split('-')[0]} Max: {dog.height.split('-')[0]}</p>
            <p>{dog.temperament}</p>
            <h4>Life Span</h4>
            <p>Min: {dog.life_span.split('-')[0]} Max: {dog.life_span.split('-')[1]}</p>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
    </div>
  );
}
