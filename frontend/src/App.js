import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/header';
import Footer from './components/Common/Footer';
import HomePage from './components/Home';
import GamesPage from './components/Game';
import MarketplacePage from './components/Marketplace';
import CommunityPage from './components/Community';
import LibraryPage from './components/Library';
import SignInPage from './components/Singin';
import SingleGame from './components/SingleGame';
import UserProfilePage from './components/User-profile';
import AboutUsPage from './components/AboutUs'
import Register from './components/Register/index';
import ForgotPassword from './components/Forgot-password';
import ResetPassword from './components/Reset-password';
import "./assets/css/bootstrap.min.css"
import "./App.css"
import "./assets/css/style.css"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/singlegame" element={<SingleGame />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
