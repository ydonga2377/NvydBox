import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src="img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li><Link to="/">Homepage</Link></li>
                  <li><Link to="/games">Game</Link></li>
                  <li><Link to="/community">Community</Link></li>
                  <li><Link to="/library">Library</Link></li>
                  <li><Link to="/marketplace">Marketplace</Link></li>
                  <li><Link to="/signin">Singin</Link></li>
                  <li><Link to="/userprofile">UserProfile</Link></li>
                  <li><Link to="/singlegame">SingleGame</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <Link to="#" className="search-switch"><span className="icon_search"></span></Link>
              <Link to="/login"><span className="icon_profile"></span></Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}

export default Header;
