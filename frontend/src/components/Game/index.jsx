import React, { useState } from "react";
import popular1 from "../../assets/img/popular/popular-1.jpg";
import popular2 from "../../assets/img/popular/popular-2.jpg";
import popular3 from "../../assets/img/popular/popular-3.jpg";
import popular4 from "../../assets/img/popular/popular-4.jpg";
import popular5 from "../../assets/img/popular/popular-5.jpg";
import popular6 from "../../assets/img/popular/popular-6.jpg";
import recent1 from "../../assets/img/recent/recent-1.jpg";
import recent2 from "../../assets/img/recent/recent-2.jpg";
import recent3 from "../../assets/img/recent/recent-3.jpg";
import recent4 from "../../assets/img/recent/recent-4.jpg";
import recent5 from "../../assets/img/recent/recent-5.jpg";
import recent6 from "../../assets/img/recent/recent-6.jpg";
import trending1 from "../../assets/img/trending/trend-1.jpg";
import trending2 from "../../assets/img/trending/trend-2.jpg";
import trending3 from "../../assets/img/trending/trend-3.jpg";
import trending4 from "../../assets/img/trending/trend-4.jpg";
import trending5 from "../../assets/img/trending/trend-5.jpg";
import trending6 from "../../assets/img/trending/trend-6.jpg";

const products = [
  { id: 1, title: "Sen to Chihiro no Kamikakushi", img: popular1, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 2, title: "Kizumonogatari III: Reiket su-hen", img: popular2, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 3, title: "Shirogane Tamashii hen Kouhan sen", img: popular3, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 4, title: "Rurouni Kenshin: Meiji Kenkaku Romantan", img: popular4, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 5, title: "Mushishi Zoku Shou 2nd Season", img: popular5, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 6, title: "Monogatari Series: Second Season", img: popular6, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 7, title: "Great Teacher Onizuka", img: recent1, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 8, title: "Fate/stay night Movie: Heaven's Feel - II. Lost", img: recent2, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 9, title: "Mushishi Zoku Shou: Suzu no Shizuku", img: recent3, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 10, title: "Fate/Zero 2nd Season", img: recent4, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 11, title: "Kizumonogatari II: Nekket su-hen", img: recent5, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 12, title: "The Seven Deadly Sins: Wrath of the Gods", img: recent6, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 13, title: "The Seven Deadly Sins: Wrath of the Gods", img: trending1, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 14, title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien", img: trending2, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 15, title: "Shingeki no Kyojin Season 3 Part 2", img: trending3, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 16, title: "Fullmetal Alchemist: Brotherhood", img: trending4, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 17, title: "Shiratorizawa Gakuen Koukou", img: trending5, comments: 11, views: 9141, categories: ["Active", "Movie"] },
  { id: 18, title: "Code Geass: Hangyaku no Lelouch R2", img: trending6, comments: 11, views: 9141, categories: ["Active", "Movie"] },
];

const ITEMS_PER_PAGE = 6;

const GamePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <div>
      {/* Breadcrumb and other content */}
      
      <section className="product-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product__page__content">
                <div className="product__page__title">
                  <h4>Romance</h4>
                </div>

                <div className="row">
                  {paginatedProducts.map((product) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      key={product.id}
                    >
                      <div className="product__item">
                        <div
                          className="product__item__pic"
                          style={{
                            backgroundImage: `url(${product.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "300px",
                          }}
                        >
                          <div className="ep">18 / 18</div>
                          <div className="comment">
                            <i className="fa fa-comments"></i>{" "}
                            {product.comments}
                          </div>
                          <div className="view">
                            <i className="fa fa-eye"></i> {product.views}
                          </div>
                        </div>
                        <div className="product__item__text">
                          <ul>
                            {product.categories.map((category, index) => (
                              <li key={index}>{category}</li>
                            ))}
                          </ul>
                          <h5>
                            <a href="#">{product.title}</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={index + 1 === currentPage ? "active" : ""}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar content here */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamePage;
