import React from "react";
import { Link } from "react-router-dom";
import style from "../dog/dog.module.css";

export default function Dog({
  id,
  bred_for,
  breed_group,
  life_span,
  origin,
  name,
  image,
  weight,
  temperament,
}) {

  let getMinMaxWeight = weight.split("-");
  let minWeight = getMinMaxWeight[0];
  let maxWeight = getMinMaxWeight[1];
  return (
    <div className={style.divOrder}>
      <div className={style.imgContainer}>
        <img className={style.imgDogs} src={image} alt="" value={name} />
      </div>
      <div className={style.dataOrder}>
        <h3>{name}</h3>
        <p>Weight</p>
        <p>
          Min: {minWeight} Max: {maxWeight}
        </p>
        <p>{temperament}</p>
        <Link to={`/home/${id}`}>
          <button className={style.btnMore}>See more</button>
        </Link>
      </div>
    </div>
  );
}
