import Card from "../UI/Card";
import AvailableMeaslsStyles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "eee",
    description: "Chicken",
    price: 49.99,
  },
  {
    id: "m3",
    name: "aaaaaa",
    description: "fish",
    price: 14.99,
  },
];

const AvailableMeasls = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeasls;
