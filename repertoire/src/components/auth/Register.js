import React, { useState } from "react";
import DataManager from "../../modules/DataManager";
import { handleFieldChange } from "../../helpers/functions";
import "../../styles/navbar.css";

const Register = (props) => {
  const [credentials, setCredentials] = useState({});

  const handleRegistration = (evt) => {
    evt.preventDefault();
    DataManager.getByProp("users", "username", credentials.username).then(
      (data) => {
        if (data.length > 0) {
          window.alert("Username exists. Please enter a different username.");
        } else {
          DataManager.post("users", credentials).then((data) => {
            sessionStorage.setItem("credentials", JSON.stringify(credentials));
            credentials.id = data.id;
            props.setUser(credentials.id);
            props.history.push("/recipes");
          });
        }
      }
    );
  };

  return (
    <>
      <div className="container-logo">
        <h2 className="brandName">Repertoire</h2>
        <h5 className="logo">RECIPE TRACKING MADE EASY</h5>
      </div>
      <form onSubmit={handleRegistration}>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="inputEmail">E-mail </label>
            <input
              type="email"
              id="email"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              required
              autoFocus
            />
            <br />
            <label htmlFor="inputUsername">Username </label>
            <input
              type="text"
              id="username"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              required
            />
            <br />
            <label htmlFor="inputPassword">Password </label>
            <input
              type="password"
              id="password"
              onChange={(evt) =>
                handleFieldChange(evt, credentials, setCredentials)
              }
              required
            />
          </div>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </>
  );
};

export default Register;
