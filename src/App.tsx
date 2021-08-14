import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
