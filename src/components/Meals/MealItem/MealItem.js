import { useContext } from "react";
import MealItemStyles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={MealItemStyles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={MealItemStyles.description}>{props.description}</div>
        <div className={MealItemStyles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
