import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curItem, item) => {
    return curItem + item.amount;
  }, 0);

  const onClickHandler = () => {
    props.onDisplayCart();
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
