import React from "react";
import { Link } from "react-router-dom";

const TestNavBar = (props) => {
  const testId = props.match.params.testId;

  return (
    <nav className="recipeNavBar">
      <ul className="container">
        <li>
          <Link className="nav-link" to={`/test/${testId}`}>
            Overview
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/test/${testId}/notes`}>
            Notes
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`/test/${testId}/directions`}>
            Directions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TestNavBar;
