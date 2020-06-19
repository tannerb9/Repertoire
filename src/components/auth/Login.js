import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../modules/DataManager";
import { handleFieldChange } from "../../helpers/functions";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  const handleLogin = (evt) => {
    evt.preventDefault();
    DataManager.getByProp("users", "username", credentials.username).then(
      (data) => {
        if (data.length > 0) {
          if (
            data[0].username === credentials.username &&
            data[0].password === credentials.password
          ) {
            sessionStorage.setItem("credentials", JSON.stringify(credentials));
            console.log(credentials);
            credentials.id = data[0].id;
            props.setUser(credentials.id);
            props.history.push("/recipes");
          } else {
            window.alert(
              "Username or password is incorrect. Please try again."
            );
          }
        } else {
          window.alert(
            "User does not exist. Please try again or register a new account."
          );
        }
      }
    );
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <div className="formgrid">
          <label htmlFor="inputUsername">Username </label>
          <input
            type="text"
            onChange={(evt) =>
              handleFieldChange(evt, credentials, setCredentials)
            }
            id="username"
            required
            autoFocus
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
        <button type="submit">Sign In</button>
        <Link to="/register">
          <p>No account? Register here</p>
        </Link>
      </fieldset>
    </form>
  );
};

export default Login;
