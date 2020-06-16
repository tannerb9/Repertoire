import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import RecipeList from "./recipes/RecipeList";
import FullRecipeCard from "./recipes/FullRecipeCard";
import TestList from "./tests/TestList";
import FullTestCard from "./tests/FullTestCard";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <>
      <Route
        exact
        path="/login"
        render={(props) => <Login setUser={setUser} {...props} />}
      />
      <Route
        path="/register"
        render={(props) => <Register setUser={setUser} {...props} />}
      />
      <Route
        exact
        path="/recipes"
        render={(props) => {
          if (hasUser) {
            return <RecipeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)"
        render={(props) => {
          if (hasUser) {
            return <FullRecipeCard {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/tests"
        render={(props) => {
          if (hasUser) {
            return <TestList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/test/:testId(\d+)"
        render={(props) => {
          if (hasUser) {
            return <FullTestCard {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
