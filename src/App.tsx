import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
import Disparos from "./pages/disparos";
import DisparoDetails from "./pages/disparosDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/disparos" component={Disparos} />
        <Route path="/disparos/detalhes" component={DisparoDetails} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
