import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartSate = {
  items: [],
  totalPrice: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const upDataedTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let upDataedItems;

    if (existingCartItem) {
      const upDataedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      upDataedItems = [...state.items];
      upDataedItems[existingCartItemIndex] = upDataedItem;
    } else {
      upDataedItems = state.items.concat(action.item);
    }

    return {
      items: upDataedItems,
      totalPrice: upDataedTotalPrice,
    };
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
