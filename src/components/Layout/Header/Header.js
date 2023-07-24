import { Fragment } from "react";

import HeaderStyles from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";
import HeaderCartButton from "../CartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={HeaderStyles.header}>
        <h1>let's eat</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={HeaderStyles["main-image"]}>
        <img src={mealsImg} alt="A table full of foods" />
      </div>
    </Fragment>
  );
};

export default Header;
