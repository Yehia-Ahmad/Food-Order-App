import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-Context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrder, setIsOrder] = useState(false);
  const cartCtx = useContext(CartContext);

  const price = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const onCloseButtonHandler = () => {
    props.onCloseCart(false);
  };

  const onShowFormOrder = () => {
    if (!isOrder) {
      setIsOrder(true);
    }
  };

  const onConfirmHandler = (userData) => {
    fetch("https://react-course-b6ae2-default-rtdb.firebaseio.com/order.json", {
      // method: "POST",
      // body: JSON.stringify({
      //   user: userData,
      //   cartItems: cartCtx.items,
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    console.log("Done");
  };

  const onCancelHandler = () => {
    setIsOrder(false);
  };

  const modalButton = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onCloseButtonHandler}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={onShowFormOrder}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal closeCart={onCloseButtonHandler}>
      {cartItem}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      {isOrder && (
        <Checkout onConfirm={onConfirmHandler} onCancel={onCancelHandler} />
      )}
      {!isOrder && modalButton}
    </Modal>
  );
};

export default Cart;
