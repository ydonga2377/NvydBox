import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Common/header';
import HomePage from './components/Home';
import GamesPage from './components/Game';
import MarketplacePage from './components/Marketplace';
import CommunityPage from './components/Community';
import LibraryPage from './components/Library';
import SignInPage from './components/Singin';
import SingleGame from './components/SingleGame';
import UserProfilePage from './components/User-profile';
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
        <Route path="/singlegame" element={<SingleGame />} />
        <Route path="/userprofile" element={<UserProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;
