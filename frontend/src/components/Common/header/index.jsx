import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="header__logo">
                <Link to="/">
                  <div className="section-title">
                    <h4>NyvdBox</h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li>
                    <Link to="/games">Game</Link>
                  </li>
                  <li>
                    <Link to="/community">Community</Link>
                  </li>
                  <li>
                    <Link to="/library">Library</Link>
                  </li>
                  <li>
                    <Link to="/marketplace">Marketplace</Link>
                  </li>
                  <li>
                    <Link to="/userprofile">User Profile</Link>
                  </li>

                  <li>
                    <Link to="/transactions">View Transaction History</Link>
                  </li>
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="logout-button site-btn p-2"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/signin" className="site-btn p-2">
                        Sign in
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-6 d-flex justify-content-end align-items-center">
              <button className="hamburger-icon" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav className="sidebar-menu">
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={toggleSidebar}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/games" onClick={toggleSidebar}>
                Game
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={toggleSidebar}>
                Community
              </Link>
            </li>
            <li>
              <Link to="/library" onClick={toggleSidebar}>
                Library
              </Link>
            </li>
            <li>
              <Link to="/marketplace" onClick={toggleSidebar}>
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/userprofile" onClick={toggleSidebar}>
                User Profile
              </Link>
            </li>
            <li>
              <Link to="/singlegame" onClick={toggleSidebar}>
                Single Game
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleSidebar}>
                Cart
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleSidebar();
                  }}
                  className="logout-button site-btn"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/signin" className="site-btn" onClick={toggleSidebar}>
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
