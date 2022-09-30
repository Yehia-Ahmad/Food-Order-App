import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeal] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-course-b6ae2-default-rtdb.firebaseio.com/Meals.json"
        );
        if (!response.ok) {
          throw new Error("something Went Wrong");
        }

        const data = await response.json();
        const loadedData = [];
        for (const mealKey in data) {
          loadedData.push({
            id: mealKey,
            name: data[mealKey].name,
            description: data[mealKey].description,
            price: data[mealKey].price,
          });
          setMeal(loadedData);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };
    fetchData();
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

  let content = <p>Loading...</p>;

  if (!isLoading) {
    content = <ul>{mealsList}</ul>;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
