import { Fragment } from "react";

import HeaderStyles from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={HeaderStyles.header}>
        <h1>let's eat</h1>
        <button>Cart</button>
      </header>
      <div className={HeaderStyles["main-image"]}>
        <img src={mealsImg} alt="A table full of foods" />
      </div>
    </Fragment>
  );
};

export default Header;
