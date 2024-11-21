import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get Cart item
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User is not logged in.");
        }

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/cart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartItems(response.data.items || []);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // delete item
  const handleDeleteItem = async (gameId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not logged in.");
      }

      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/cart/${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartItems(cartItems.filter((item) => item.gameId._id !== gameId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      ?.reduce((total, item) => total + item.gameId.price, 0)
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
              <div key={item.gameId._id} className="cart-item">
                <img
                  src={item.gameId.imagePath || "/default-image.jpg"}
                  alt={item.gameId.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.gameId.title}</h3>
                  <p>{item.gameId.description}</p>
                  <p>Price: ${item.gameId.price.toFixed(2)}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteItem(item.gameId._id)}
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
