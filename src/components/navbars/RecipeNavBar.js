import React from "react";
import { Link } from "react-router-dom";

const RecipeNavBar = (props) => {
  const recipeId = props.match.params.recipeId;
  return (
    <nav className="recipeNavBar">
      <ul className="container">
        <li>
          <Link className="nav-link" to={`/recipe/${recipeId}`}>
            Overview
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/recipe/${recipeId}/notes`}>
            Notes
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/recipe/${recipeId}/directions`}>
            Directions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default RecipeNavBar;
