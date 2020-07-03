import React from "react";
import { Link } from "react-router-dom";
import RecipeOrTest from "../modals/RecipeOrTest";
import "../../styles/navbar.css";

const TapBar = (props) => {
  return (
    <nav>
      <ul className="container tapbar">
        <li>
          <Link className="nav-link" to="/recipes">
            <img src={require("../../Icons/literature-50.png")} alt="Recipes" />
            <p className="active">Recipes</p>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/tests">
            <img src={require("../../Icons/test-folder-50.png")} alt="Tests" />
            <p className="active">Tests</p>
          </Link>
        </li>
        {props.isRecipe ? (
          <li>
            <div>
              <img
                src={require("../../Icons/plus-50.png")}
                alt="New"
                onClick={() => {
                  return <RecipeOrTest {...props} />;
                }}
              />
            </div>
            {/* <Link className="nav-link" to="/recipe/new">
              <img src={require("../../Icons/plus-50.png")} alt="New" />
            </Link> */}
          </li>
        ) : null}
        {props.isTest ? (
          <li>
            <Link className="nav-link" to="/test/new">
              <img src={require("../../Icons/plus-50.png")} alt="New" />
            </Link>
          </li>
        ) : null}
        {props.isVersion ? (
          <li>
            <Link
              className="nav-link"
              to={`/test/${props.match.params.testId}/versions/new`}
            >
              <img
                className="addBtn"
                src={require("../../Icons/plus-50.png")}
                alt="New"
              />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default TapBar;
