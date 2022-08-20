import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = () => {};

  const onRemoveHandler = () => {};

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={onAddHandler}
            onRemove={onRemoveHandler}
          />
        );
      })}
    </ul>
  );

  const onCloseButtonHandler = () => {
    props.onCloseCart(false);
    console.log(price);
  };

  return (
    <Modal closeCart={onCloseButtonHandler}>
      {cartItem}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={onCloseButtonHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
