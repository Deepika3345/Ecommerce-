import React, { useContext, useState } from "react";


import ShopContext from "./Context/ShopContext";

const CartItem = () => {
  const { dispatch, cartItems } = useContext(ShopContext);
  // console.log("cart",cartItems)



  const increaseQuntity = (currentItem) => {

    dispatch({
      type: "INCREASE",
      payload: currentItem
    })

  }
  const decreaseQuntity = (currentItem) => {
    dispatch({
      type: "DECREASE",
      payload: currentItem
    })
  }

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  return (


    <>
      {
        cartItems.map((currentItem, index) => (
          <div className="product all-items all-remove-item" key={index}>
            <div className="  card  product-card">

              <span>
                <img id='product-img' src={currentItem?.image} className="card-img-top" alt="..." />
              </span>
              <div className="card-body">
                <h5 className="card-title">{currentItem?.title}</h5>


                <span className="quantity">


                  <button onClick={() => decreaseQuntity(currentItem)}>-</button>
                  <h3>Quantity:{currentItem.itemQuantity}</h3>
                  <button onClick={() => increaseQuntity(currentItem)}>+</button>
                </span>
                <span className='add-btn'>
                  <p className="card-text"><small className="text-body-secondary">Price:{currentItem?.price}</small></p>
                  <button className="remove-btn btn btn-sm btn-danger " onClick={() => handleRemove(currentItem?.id)}>
                    Remove Item
                  </button>
                </span>
              </div>
            </div>

          </div>


        ))




      }
    </>



  );
};





export default CartItem;
