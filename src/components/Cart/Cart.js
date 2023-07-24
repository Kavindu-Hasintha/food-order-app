import Modal from "../UI/Modal";
import CartContext from "../store/Cart-context";
import CartStyles from "./Cart.module.css";
import React, { useContext } from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={CartStyles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={CartStyles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={CartStyles.actions}>
        <button className={CartStyles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={CartStyles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
