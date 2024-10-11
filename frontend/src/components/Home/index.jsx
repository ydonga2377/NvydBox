import React from 'react';
import reviewImage from '../../assets/img/anime/review-1.jpg';
import heroImage1 from '../../assets/img/hero/hero-1.jpg';
import trendingImage1 from '../../assets/img/trending/trend-1.jpg';
import trendingImage2 from '../../assets/img/trending/trend-2.jpg';
import trendingImage3 from '../../assets/img/trending/trend-3.jpg';
import trendingImage4 from '../../assets/img/trending/trend-4.jpg';
import trendingImage5 from '../../assets/img/trending/trend-5.jpg';
import trendingImage6 from '../../assets/img/trending/trend-6.jpg';
import sidebarImage1 from '../../assets/img/sidebar/tv-1.jpg';
import sidebarImage2 from '../../assets/img/sidebar/tv-2.jpg';
import sidebarImage3 from '../../assets/img/sidebar/tv-3.jpg';
import sidebarImage4 from '../../assets/img/sidebar/tv-4.jpg';
import sidebarImage5 from '../../assets/img/sidebar/tv-5.jpg';
import commentImage1 from '../../assets/img/sidebar/comment-1.jpg';
import commentImage2 from '../../assets/img/sidebar/comment-2.jpg';
import commentImage3 from '../../assets/img/sidebar/comment-3.jpg';
import commentImage4 from '../../assets/img/sidebar/comment-4.jpg';

const Index = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero__slider owl-carousel">
            <div className="hero__items set-bg" style={{ backgroundImage: `url(${heroImage1})` }}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for other hero items, if necessary */}
          </div>
        </div>
      </section>

     

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Trending Now</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                      <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage1})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage2})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage3})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage4})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage5})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${trendingImage6})` }}>
                        <div className="ep">18 / 18</div>
                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5><a href="#">Code Geass: Hangyaku no Lelouch R2</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">Day</li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                  </ul>
                  <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sidebarImage1})` }}>
                    <div className="ep">18 / 18</div>
                    <h5><a href="#">My Hero Academia: Heroes Rising</a></h5>
                  </div>
                  <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sidebarImage2})` }}>
                    <div className="ep">18 / 18</div>
                    <h5><a href="#">One Punch Man</a></h5>
                  </div>
                  <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sidebarImage3})` }}>
                    <div className="ep">18 / 18</div>
                    <h5><a href="#">Attack on Titan</a></h5>
                  </div>
                  <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sidebarImage4})` }}>
                    <div className="ep">18 / 18</div>
                    <h5><a href="#">Death Note</a></h5>
                  </div>
                  <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sidebarImage5})` }}>
                    <div className="ep">18 / 18</div>
                    <h5><a href="#">Sword Art Online</a></h5>
                  </div>
                </div>
                <div className="product__sidebar__comment">
                  <div className="section-title">
                    <h5>Comments</h5>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic set-bg" style={{ backgroundImage: `url(${commentImage1})` }}></div>
                    <div className="product__sidebar__comment__item__text">
                      <h6><a href="#">Zac Taylor</a></h6>
                      <span>Just finished watching this!</span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic set-bg" style={{ backgroundImage: `url(${commentImage2})` }}></div>
                    <div className="product__sidebar__comment__item__text">
                      <h6><a href="#">Lily Collins</a></h6>
                      <span>Great story!</span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic set-bg" style={{ backgroundImage: `url(${commentImage3})` }}></div>
                    <div className="product__sidebar__comment__item__text">
                      <h6><a href="#">Tom Hardy</a></h6>
                      <span>Can’t wait for the next episode!</span>
                    </div>
                  </div>
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic set-bg" style={{ backgroundImage: `url(${commentImage4})` }}></div>
                    <div className="product__sidebar__comment__item__text">
                      <h6><a href="#">Emma Watson</a></h6>
                      <span>A must-watch!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
