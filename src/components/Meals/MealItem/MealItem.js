import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addCartItem = (amountNumber) => {
    cartCtx.addItem({
      name: props.name,
      id: props.id,
      amount: amountNumber,
      price: props.price,
    });
    // console.log(cartCtx.items);
  };
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={addCartItem} />
      </div>
    </li>
  );
};

export default MealItem;
