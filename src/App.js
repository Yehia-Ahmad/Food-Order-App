import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import CartProvider from "./Store/CartProvider";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

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
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
