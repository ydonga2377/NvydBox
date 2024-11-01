import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import heroImage1 from "../../assets/img/hero/hero-1.jpg";
import trendingImage1 from "../../assets/img/trending/trend-1.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Game 1",
      price: 29.99,
      image: heroImage1,
    },
    {
      id: 2,
      name: "Game 2",
      price: 19.99,
      image: trendingImage1,
    },
  ]);

  const handleDeleteItem = (id) => {
    setCartItems(cartItems?.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      ?.reduce((total, item) => total + item.price, 0)
      ?.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems?.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems?.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${calculateTotal()}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
