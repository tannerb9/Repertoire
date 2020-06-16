import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TapBar = () => {
  return (
    <>
      <nav className="tapbar">
        <ul className="container">
          <li>
            <Link className="nav-link" to="/recipes">
              <button type="button">Recipes</button>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tests">
              <button type="button">Tests</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TapBar;
