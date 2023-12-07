// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstagramFeed from "./components/InstagramFeed";
import TwitterFeed from "./components/TwitterFeed";

function App() {
  return (
    <Router>
      <div className="App">
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
  <div>
    <h2>Home</h2>
    <p>Welcome to the Social Media Aggregator App!</p>
  </div>
);

export default App;
