import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import CartItem from "../CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  // console.log(cartItems)


  const total = cartItems.reduce((p, currentItem) => {
    return p + (currentItem.price * currentItem.itemQuantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container-image">

        <img className="empty-cart-image" src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
        <h1 className="all-products-title">No Items In Your Cart!!</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items added-product">
        <CartItem />
      </div>
      <div id="cart-total" className="card">
        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />${total}
          </h1>
          <button className="btn btn-danger btn-sm pay-btn">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;