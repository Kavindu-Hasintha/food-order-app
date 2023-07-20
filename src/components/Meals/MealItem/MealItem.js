import MealItemStyles from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={MealItemStyles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={MealItemStyles.description}>{props.description}</div>
        <div className={MealItemStyles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
