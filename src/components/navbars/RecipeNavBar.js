import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const RecipeNavBar = (props) => {
  const recipeId = props.match.params.recipeId;
  return (
    <nav className="recipeNavBar">
      <ul className="container tapbar">
        <li>
          <Link
            className={`nav-link ${props.isOverview ? "active" : ""}`}
            to={`/recipe/${recipeId}`}
          >
            <img
              src={require("../../Icons/bulleted-list-50.png")}
              alt=""
            />
            <p>Overview</p>
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${props.isNotes ? "active" : ""}`}
            to={`/recipe/${recipeId}/notes`}
          >
            <img
              src={require("../../Icons/chat-bubble-50.png")}
              alt=""
            />
            <p>Notes</p>
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${props.isDirections ? "active" : ""}`}
            to={`/recipe/${recipeId}/directions`}
          >
            <img
              src={require("../../Icons/numbered-list-150.png")}
              alt=""
            />
            <p>Directions</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RecipeNavBar;
