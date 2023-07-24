import Modal from "../UI/Modal";
import CartStyles from "./Cart.module.css";
import React from "react";

function Cart(props) {
  const cartItems = (
    <ul className={CartStyles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 22.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={CartStyles.total}>
        <span>Total Amount</span>
        <span>45.98</span>
      </div>
      <div className={CartStyles.actions}>
        <button className={CartStyles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={CartStyles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
