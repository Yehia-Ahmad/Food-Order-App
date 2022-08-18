import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "e1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  const onCloseButtonHandler = () => {
    props.onCloseCart(false);
  };

  return (
    <Modal closeCart={onCloseButtonHandler}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={onCloseButtonHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
