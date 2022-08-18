import React from "react";

import Input from "./Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
