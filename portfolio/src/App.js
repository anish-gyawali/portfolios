import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
      </div>
    </Router>
  );
}

export default App;
