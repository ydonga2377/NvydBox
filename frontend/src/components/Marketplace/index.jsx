import React from "react";
import itemImg1 from "../../assets/img/blog/blog-1.jpg";
import itemImg2 from "../../assets/img/blog/blog-2.jpg";
import itemImg3 from "../../assets/img/blog/blog-3.jpg";
import itemImg4 from "../../assets/img/blog/blog-4.jpg";
import itemImg5 from "../../assets/img/blog/blog-5.jpg";
import itemImg6 from "../../assets/img/blog/blog-6.jpg";
import itemImg7 from "../../assets/img/blog/blog-7.jpg";
import itemImg8 from "../../assets/img/blog/blog-8.jpg";
const marketplaceItems = [
  {
      id: 1,
      title: "Epic Sword",
      img: itemImg1,
      price: 20,
      link: "#"
  },
  {
      id: 2,
      title: "Legendary Armor",
      img: itemImg2,
      price: 30,
      link: "#"
  },
  {
      id: 3,
      title: "Mystic Potion",
      img: itemImg3,
      price: 10,
      link: "#"
  },
  {
      id: 4,
      title: "Healing Elixir",
      img: itemImg4,
      price: 15,
      link: "#"
  },
  {
      id: 5,
      title: "Dragon Shield",
      img: itemImg5,
      price: 25,
      link: "#"
  },
  {
      id: 6,
      title: "Magic Wand",
      img: itemImg6,
      price: 35,
      link: "#"
  },
  {
      id: 7,
      title: "Ancient Scroll",
      img: itemImg7,
      price: 18,
      link: "#"
  },
  {
      id: 8,
      title: "Phantom Cloak",
      img: itemImg8,
      price: 40,
      link: "#"
  }
];

const index = () => {
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
                <a href={item.link} className="btn btn-warning">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
