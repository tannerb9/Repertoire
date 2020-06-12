import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleFieldChange } from "../../helpers/helpers";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  const handleLogin = (evt) => {
    evt.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.history.push("/");
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
            autoFocus=""
            placeholder="Username"
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
            placeholder="Password"
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
