import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TopNavBar = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    props.setHasUser(props.isAuthenticated());
  };

  return (
    <>
      <div className="container">
        <img
          src={require("../../Icons/back-24.png")}
          alt="Back"
          onClick={() => {
            window.history.back();
          }}
        />
        <h2 className="brandName">Repertoire</h2>
        <Link to="/login">
          <img
            src={require("../../Icons/exit-24.png")}
            alt="Log Out"
            onClick={handleLogout}
          />
        </Link>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
};

export default TopNavBar;
