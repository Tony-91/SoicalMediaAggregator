// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstagramFeed from "./components/InstagramFeed";
import TwitterFeed from "./components/TwitterFeed";
// import "./styles/App.css"; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<InstagramFeed />} />
          <Route path="/twitter" element={<TwitterFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home-container">
    <h2>Welcome to the Social Media Aggregator App!</h2>
    <p>Effortlessly view your Instagram and Twitter feeds in one place.</p>
  </div>
);

export default App;
