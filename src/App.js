// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import InstagramFeed from './components/InstagramFeed';
import TwitterFeed from './components/TwitterFeed';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/instagram" component={InstagramFeed} />
          <Route path="/twitter" component={TwitterFeed} />
          <Route path="/" exact>
            <h2>Home</h2>
            <p>Welcome to the Social Media Aggregator App!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
