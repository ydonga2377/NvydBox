import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Wishlist.css";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to view your wishlist.");
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/wishlist`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setWishlist(response.data.games || []);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        alert("Failed to fetch wishlist.");
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (gameId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to remove items from your wishlist.");
      return;
    }

    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/wishlist/${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlist(wishlist.filter((game) => game.gameId._id !== gameId));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      alert("Failed to remove game from wishlist.");
    }
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((game) => (
            <div key={game.gameId._id} className="wishlist-item">
              <img
                src={`../../${game.gameId.imagePath}`}
                alt={game.gameId.title}
              />
              <div>
                <h3>{game.gameId.title}</h3>
                <p>{game.gameId.description}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(game.gameId._id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
