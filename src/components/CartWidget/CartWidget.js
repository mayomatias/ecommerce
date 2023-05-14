import React from "react";
import cart from "./assets/cart.svg"

const CartWidget = () => {
  return(
    <div>
      <img src={cart} alt="cart-widget" />
      <p>{"2"}</p>
    </div>
  )
}

export default CartWidget;