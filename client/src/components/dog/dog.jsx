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
  let getMinMax = weight.split("-");
  let min = getMinMax[0];
  let max = getMinMax[1];
  return (
    <div className={style.divOrder}>
      <div className={style.imgContainer}>
        <img className={style.imgDogs} src={image} alt="" value={name} />
      </div>
      <div className={style.dataOrder}>
        <h3>{name}</h3>
        <p>Weight</p>
        <p>
          Min: {min} Max: {max}
        </p>
        <p>{temperament}</p>
        <Link to={`/home/${id}`}>
          <button className={style.btnMore}  >See more</button>
        </Link>
      </div>
    </div>
  );
}
