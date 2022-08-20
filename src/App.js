import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsVisiable, setCartIsVisiable] = useState(false);

  const onClickCartHandler = () => {
    setCartIsVisiable(true);
  };

  return (
    <CartProvider>
      {cartIsVisiable && <Cart onCloseCart={setCartIsVisiable} />}
      <Header onClickCart={onClickCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
