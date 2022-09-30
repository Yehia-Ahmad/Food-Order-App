import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeal] = useState([]);

  useEffect(() => {
    fetch("https://react-course-b6ae2-default-rtdb.firebaseio.com/Meals.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedData = [];
        for (const mealKey in data) {
          loadedData.push({
            id: mealKey,
            name: data[mealKey].name,
            description: data[mealKey].description,
            price: data[mealKey].price,
          });
          setMeal(loadedData);
        }
      });
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
