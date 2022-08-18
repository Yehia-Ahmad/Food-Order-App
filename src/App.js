import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [isCartDisable, setCartDisable] = useState(false);

  const onClickCartHandler = () => {
    setCartDisable(true);
  };

  return (
    <React.Fragment>
      {isCartDisable && <Cart onCloseCart={setCartDisable} />}
      <Header onClickCart={onClickCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
