import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addItemHandler = (item) => {
    cartProvider.items.push(item);
    cartProvider.Amount += 1;
  };

  const removeItemHandler = (id) => {
    cartProvider.items.map((item, index) => {
      if ((item.id = id)) {
        cartProvider.items = cartProvider.items.splice(0, index);
        cartProvider.Amount -= 1;
      }
      return cartProvider;
    });
  };

  const cartProvider = {
    items: [],
    Amount: 0,
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
