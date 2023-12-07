// src/App.js
import React from "react";
import { Route, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstagramFeed from "./components/InstagramFeed";
import TwitterFeed from "./components/TwitterFeed";

function App() {
  return (
    <router>
      <div className="App">
        <Navbar />
        <routes>
          <route path="/instagram" element={<InstagramFeed />}></route>
          <route path="/twitter" element={<TwitterFeed />}></route>
          <Route path="/">
            <h2>Home</h2>
            <p>Welcome to the Social Media Aggregator App!</p>
          </Route>
        </routes>
      </div>
    </router>
  );
}

export default App;
