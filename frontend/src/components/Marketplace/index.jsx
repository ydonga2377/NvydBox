import React from "react";
import itemImg1 from "../../assets/img/blog/blog-1.jpg";
import itemImg2 from "../../assets/img/blog/blog-2.jpg";
import itemImg3 from "../../assets/img/blog/blog-3.jpg";
import itemImg4 from "../../assets/img/blog/blog-4.jpg";
import itemImg5 from "../../assets/img/blog/blog-5.jpg";
import itemImg6 from "../../assets/img/blog/blog-6.jpg";
import itemImg7 from "../../assets/img/blog/blog-7.jpg";
import itemImg8 from "../../assets/img/blog/blog-8.jpg";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import "./Marketplace.css";

const marketplaceItems = [
  {
    id: 1,
    title: "Epic Sword",
    img: itemImg1,
    price: 20,
    link: "#",
  },
  {
    id: 2,
    title: "Legendary Armor",
    img: itemImg2,
    price: 30,
    link: "#",
  },
  {
    id: 3,
    title: "Mystic Potion",
    img: itemImg3,
    price: 10,
    link: "#",
  },
  {
    id: 4,
    title: "Healing Elixir",
    img: itemImg4,
    price: 15,
    link: "#",
  },
  {
    id: 5,
    title: "Dragon Shield",
    img: itemImg5,
    price: 25,
    link: "#",
  },
  {
    id: 6,
    title: "Magic Wand",
    img: itemImg6,
    price: 35,
    link: "#",
  },
  {
    id: 7,
    title: "Ancient Scroll",
    img: itemImg7,
    price: 18,
    link: "#",
  },
  {
    id: 8,
    title: "Phantom Cloak",
    img: itemImg8,
    price: 40,
    link: "#",
  },
];

const index = () => {
  const baseURL = window.location.origin;
  const userToken = localStorage.getItem("token");

  const handleAddToCart = async (gameId) => {
    try {
      if (!userToken) {
        throw new Error("User is not logged in.");
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/cart`,
        { gameId: "67244f18e7c8468930a685fe" },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert(
        error.response?.data?.message ||
          "Failed to add item to cart. Try again."
      );
    }
  };
  return (
    <div className="marketplace-container">
      <h1 className="text-center text-light mb-4">Marketplace</h1>
      <div className="row">
        {marketplaceItems.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card marketplace-card">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
                {userToken ? (
                  <button
                    className="btn btn-add-to-cart"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <p className="text-muted">Log in to add items to your cart</p>
                )}
                <a href={item.link} className="btn btn-warning">
                  Buy Now
                </a>
                <div className="share-buttons mt-3">
                  <FacebookShareButton
                    windowWidth={1000}
                    windowHeight={1000}
                    url={`${baseURL}/games/${item.id}`}
                    quote={`Check out this amazing game: ${item.title}`}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <TwitterShareButton
                    windowWidth={1000}
                    windowHeight={1000}
                    url={`${baseURL}/games/${item.id}`}
                    title={`Check out this amazing game: ${item.title}`}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    windowWidth={1000}
                    windowHeight={1000}
                    url={`${baseURL}/games/${item.id}`}
                    title={`Check out this amazing game: ${item.title}`}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
