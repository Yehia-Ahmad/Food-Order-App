import React from "react";

import mealsimage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OSMAN BEY</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="meals table of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
