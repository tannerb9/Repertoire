import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TapBar = (props) => {
  return (
    <>
      <nav className="tapbar">
        <ul className="container">
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/recipes">
                <button type="button">Recipes</button>
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/tests">
                <button type="button">Tests</button>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default TapBar;
