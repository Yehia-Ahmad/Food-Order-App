import React, { useContext } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../Store/Cart-Context";

const MealItemForm = () => {
  const ctx = useContext(CartContext);

  const addItemHandler = () => {
    ctx.addItem();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
