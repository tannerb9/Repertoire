import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";

const ApplicationViews = () => {
  return <Route path="/login" component={Login} />;
};

export default ApplicationViews;
