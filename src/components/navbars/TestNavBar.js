import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TestNavBar = (props) => {
  const testId = props.match.params.testId;

  return (
    <nav className="recipeNavBar">
      <ul className="container tapbar">
        <li>
          <Link
            className={`nav-link ${props.isOverview ? "active" : ""}`}
            to={`/test/${testId}`}
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
            to={`/test/${testId}/notes`}
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
            to={`/test/${testId}/directions`}
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

export default TestNavBar;
