import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartSate = {
  items: [],
  totalPrice: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const upDataedItems = state.items.concat(action.item);
    const upDataedTotalPrice =
      state.Amount + action.item.amount * action.item.price;
    return {
      items: upDataedItems,
      totalPrice: upDataedTotalPrice,
    };
  } else if (action.type === "REMOVE") {
  }

  return defaultCartSate;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartSate
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartProvider = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
