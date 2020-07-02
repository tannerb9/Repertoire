import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TapBar = (props) => {
  return (
    <>
      <nav className="tapbar">
        <ul className="container tapbar">
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/recipes">
                <img
                  src={require("../../Icons/literature-50.png")}
                  alt="Recipes"
                />
                <p className="active">Recipes</p>
              </Link>
            </li>
          ) : null}
          {props.hasUser ? (
            <li>
              <Link className="nav-link" to="/tests">
                <img
                  src={require("../../Icons/test-folder-50.png")}
                  alt="Recipes"
                />
                <p className="active">Tests</p>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default TapBar;
