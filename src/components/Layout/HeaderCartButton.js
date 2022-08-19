import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const onClickHandler = () => {
    props.onDisplayCart();
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.Amount}</span>
    </button>
  );
};

export default HeaderCartButton;
