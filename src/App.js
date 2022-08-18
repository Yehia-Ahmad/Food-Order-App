import React from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
}

export default App;
