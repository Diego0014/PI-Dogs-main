import { Link } from "react-router-dom";
import style from "../landing/initialPage.module.css";

export default function Index() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome</h1>
      <div className={style.containerT}>
        <div className={style.typedOut}>To my individual project!</div>
      </div>
      <div className={style.enterBtnDiv}>
        <Link to= '/home'>
        <button className={style.enterBtn}>
          Shut up! I want to see dogs!
        </button>
        </Link>
      </div>
    </div>
  );
}
