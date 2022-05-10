import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import Order from "../order/orderDogs";
import style from "../navBar/home.module.css";
export function Nav() {
  return (
    <div className={style.navOrder}>
      <div>
        <Link to="/home">
          <button className={style.homeBtn} />
        </Link>
      </div>
      <div>
        <Link to="/dog">
          <button>Create a dog</button>
        </Link>
      </div>
      <SearchBar />
      <Order />
    </div>
  );
}

export default Nav;
