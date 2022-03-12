import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const Cart = ({ products, total, onCheckoutclicked }) => {
  // Cart component should display total products
  // It should display a message "You can add some products to cart."
  // when product is added it should display title, price and quantity.

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes} </div>
      <p>Total: &#36;{total}</p>
      <button
        onclick={onCheckoutclicked}
        // Should diable button only when no products are there in the cart.
      >
        // when checkout is clicked the cart should be refreshed and the button should be disabled. Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutclicked: PropTypes.func,
};

export default Cart;
