import React from "react";
import "./styles.css";
import Footer from "./components/Footer";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import faq from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={faq} />
      </Switch>
      <div className="App">
        <Footer />
      </div>
    </BrowserRouter>
  );
}
