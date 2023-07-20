import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeasls from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeasls />
    </Fragment>
  );
};

export default Meals;
