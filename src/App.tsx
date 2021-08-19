import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Disparos from "./pages/disparos";
import DisparoDetails from "./pages/disparosDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/disparos" component={Disparos} />
          <Route path="/disparos/detalhes/:code" component={DisparoDetails} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
