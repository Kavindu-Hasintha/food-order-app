import { useEffect, useState } from "react";
import Card from "../UI/Card";
import AvailableMeaslsStyles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

const AvailableMeasls = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadedMeals = [];

      for (const mealId in mealsObj) {
        loadedMeals.push({
          id: mealId,
          name: mealsObj[mealId].name,
          description: mealsObj[mealId].description,
          price: mealsObj[mealId].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://food-order-app-b04fc-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={AvailableMeaslsStyles.meals}>
      {isLoading && !error && <h2>Loading...</h2>}
      {!isLoading && error && <h2>Try again later!</h2>}
      {!isLoading && !error && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeasls;
