import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../pages";

export default function index() {
  return (
    <div className="">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}
