import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  const displayCart = () => {
    props.onClickCart();
  };
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OSMAN BEY</h1>
        <HeaderCartButton onDisplayCart={displayCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="meals table of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
