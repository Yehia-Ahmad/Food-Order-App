import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [cartIsVisiable, setCartIsVisiable] = useState(false);

  const onClickCartHandler = () => {
    setCartIsVisiable(true);
  };

  return (
    <React.Fragment>
      {cartIsVisiable && <Cart onCloseCart={setCartIsVisiable} />}
      <Header onClickCart={onClickCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
