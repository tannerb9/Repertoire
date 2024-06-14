import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Repertoire from "./Repertoire";
import "./index.css";

ReactDOM.render(
  <Router>
    <Repertoire />
  </Router>,
  document.getElementById("root")
);
