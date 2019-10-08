import React, { Component } from "react";
import "../node_modules/hover.css/css/hover.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registro from "./pages/registro/registro";
import PregFrecuentes from "./pages/pregfrecuentes/pregFrecuentes";
import SecSalas from "./pages/secSalas";
import SecVerSala from "./pages/secVerSala";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Registro} />
          <Route exact path="/preguntas" component={PregFrecuentes} />
          <Route exact path="/secsalas" component={SecSalas} />
          <Route exact path="/secversala" component={SecVerSala} />
        </Switch>
      </Router>
    );
  }
}

export default App;
