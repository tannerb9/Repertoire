import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import RecipeDirections from "./recipes/RecipeDirections";
import RecipeList from "./recipes/RecipeList";
import RecipeNavBar from "./navbars/RecipeNavBar";
import RecipeNotes from "./recipes/RecipeNotes";
import FullRecipeCard from "./recipes/FullRecipeCard";
import TestDirections from "./tests/TestDirections";
import TestList from "./tests/TestList";
import TestNavBar from "./navbars/TestNavBar";
import TestNotes from "./tests/TestNotes";
import FullTestCard from "./tests/FullTestCard";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <>
      <Route
        exact
        path="/"
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
            return (
              <>
                <RecipeNavBar {...props} />
                <FullRecipeCard {...props} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)/notes"
        render={(props) => {
          if (hasUser) {
            return (
              <>
                <RecipeNavBar {...props} />
                <RecipeNotes {...props} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)/directions"
        render={(props) => {
          if (hasUser) {
            return (
              <>
                <RecipeNavBar {...props} />
                <RecipeDirections {...props} />
              </>
            );
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
            return (
              <>
                <TestNavBar {...props} />
                <FullTestCard {...props} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/test/:testId(\d+)/notes"
        render={(props) => {
          if (hasUser) {
            return (
              <>
                <TestNavBar {...props} />
                <TestNotes {...props} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/test/:testId(\d+)/directions"
        render={(props) => {
          if (hasUser) {
            return (
              <>
                <TestNavBar {...props} />
                <TestDirections {...props} />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ApplicationViews;
