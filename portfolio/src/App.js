import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages";
function App() {
  return (
    <Router>
      <div className="app">
        <Home />
      </div>
    </Router>
  );
}

export default App;
