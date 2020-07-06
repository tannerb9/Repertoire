import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TopNavBar = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    props.setHasUser(props.isAuthenticated());
  };

  return (
    <div>
      {props.hasUser ? (
        <div className="container topnav">
          <>
            {props.isRecipeCard ? (
              <Link to="/recipes">
                <img src={require("../../Icons/back-24.png")} alt="Back" />
              </Link>
            ) : null}
            {props.isTestCard ? (
              <Link to={`/test/${props.testId}/versions`}>
                <img src={require("../../Icons/back-24.png")} alt="Back" />
              </Link>
            ) : null}
            {props.isVersionList ? (
              <Link to={`/tests`}>
                <img src={require("../../Icons/back-24.png")} alt="Back" />
              </Link>
            ) : null}
            {!props.isTestCard &&
            !props.isRecipeCard &&
            !props.isVersionList ? (
              <img
                src={require("../../Icons/back-24.png")}
                alt="Back"
                onClick={() => {
                  window.history.back();
                }}
              />
            ) : null}

            <h2 className="brandName">Repertoire</h2>
            <Link to="/login">
              <img
                src={require("../../Icons/exit-24.png")}
                alt="Log Out"
                onClick={handleLogout}
              />
            </Link>
          </>
        </div>
      ) : null}
    </div>
  );
};

export default TopNavBar;
