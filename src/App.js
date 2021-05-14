import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/home"
import Work from "./pages/Work"
import About from "./pages/About"

import NavBar from "./components/NavBar/"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;