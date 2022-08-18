import React from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {
  const onClickHandler = () => {
    return <Cart />;
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
