import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const TopNavBar = (props) => {
  const handleLogout = () => {
    sessionStorage.clear();
    props.setHasUser(props.isAuthenticated());
  };

  return (
    <div className="container">
      <h2 className="brandName">Repertoire</h2>
      <Link to="/login">
        <button className="btn-logout" onClick={handleLogout}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default TopNavBar;
