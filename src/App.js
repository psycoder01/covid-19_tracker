import React from "react";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

import {BrowserRouter as Router,Route } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
      </Router>
    </div>
  );
}

export default App;
