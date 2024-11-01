import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <div className="section-title"><h4>NyvdBox</h4></div>
              </Link>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/games">Game</Link></li>
                  <li><Link to="/community">Community</Link></li>
                  <li><Link to="/library">Library</Link></li>
                  <li><Link to="/marketplace">Marketplace</Link></li>
                  <li><Link to="/userprofile">User Profile</Link></li>
                  <li><Link to="/singlegame">Single Game</Link></li>
                  <li><Link to="/transactions">View Transaction History</Link></li>
                  {isLoggedIn ? (
                    <li><button onClick={handleLogout} className="logout-button site-btn p-2">Logout</button></li>
                  ) : (
                    <li><Link to="/signin"className='site-btn p-2'>Sign in</Link></li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <Link to="#" className="search-switch"><span className="icon_search"></span></Link>
              <Link to="/signin"><span className="icon_profile"></span></Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
