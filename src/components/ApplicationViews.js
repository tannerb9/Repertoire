import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TapBar from "./navbars/TapBar";
import TopNavBar from "./navbars/TopNavBar";
import FullRecipeCard from "./recipes/FullRecipeCard";
import NewRecipeForm from "./recipes/NewRecipeForm";
import RecipeDirections from "./recipes/RecipeDirections";
import RecipeEditForm from "./recipes/RecipeEditForm";
import RecipeList from "./recipes/RecipeList";
import RecipeNavBar from "./navbars/RecipeNavBar";
import RecipeNotes from "./recipes/RecipeNotes";
import FullTestCard from "./tests/FullTestCard";
import NewTestForm from "./tests/NewTestForm";
import TestDirections from "./tests/TestDirections";
import TestEditForm from "./tests/TestEditForm";
import TestList from "./tests/TestList";
import TestNavBar from "./navbars/TestNavBar";
import TestNotes from "./tests/TestNotes";
import NewVersionForm from "./tests/NewVersionForm";
import VersionList from "./tests/VersionList";
// import GenForm from "./recipes/GenericForm";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  const isAuthenticated = props.isAuthenticated;
  const setHasUser = props.setHasUser;

  return (
    <>
      {/* <Route
        exact
        path="/addgeneric"
        render={(props) => {
          return <GenForm inputText={"im adding"} isEdit={false} {...props} />;
        }}
      />
      <Route
        exact
        path="/editgeneric"
        render={(props) => {
          return <GenForm inputText={"im editing"} isEdit={true} {...props} />;
        }}
      /> */}
      <Route
        exact
        path="/"
        render={() => (
          <>{hasUser ? <Redirect to="/recipes" /> : <Redirect to="/login" />}</>
        )}
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
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <RecipeList {...props} />
                <TapBar isRecipe={true} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/recipe/new"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <NewRecipeForm {...props} />{" "}
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)"
        render={(props) => (
          <>
            <TopNavBar
              isRecipeCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
            />
            <RecipeNavBar {...props} />
            {hasUser ? (
              <FullRecipeCard
                recipeId={props.match.params.recipeId}
                {...props}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)/edit"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <RecipeEditForm {...props} />{" "}
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)/notes"
        render={(props) => (
          <>
            <TopNavBar
              isRecipeCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
            />
            <RecipeNavBar {...props} />
            {hasUser ? <RecipeNotes {...props} /> : <Redirect to="/login" />}
          </>
        )}
      />
      <Route
        exact
        path="/recipe/:recipeId(\d+)/directions"
        render={(props) => (
          <>
            <TopNavBar
              isRecipeCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
            />
            <RecipeNavBar {...props} />
            {hasUser ? (
              <RecipeDirections {...props} />
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/tests"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <TestList {...props} />
                <TapBar isTest={true} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)/versions"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                  isVersionList={true}
                />
                <VersionList {...props} />
                <TapBar {...props} isVersion={true} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)/versions/new"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <NewVersionForm {...props} />{" "}
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/new"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <NewTestForm {...props} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)"
        render={(props) => (
          <>
            <TopNavBar
              isTestCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
              testId={props.match.params.testId}
            />
            <TestNavBar {...props} />
            {hasUser ? (
              <FullTestCard testId={props.match.params.testId} {...props} />
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)/edit"
        render={(props) => (
          <>
            {hasUser ? (
              <>
                <TopNavBar
                  hasUser={hasUser}
                  isAuthenticated={isAuthenticated}
                  setHasUser={setHasUser}
                />
                <TestEditForm {...props} />{" "}
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)/notes"
        render={(props) => (
          <>
            <TopNavBar
              isTestCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
              testId={props.match.params.testId}
            />
            <TestNavBar {...props} />
            {hasUser ? <TestNotes {...props} /> : <Redirect to="/login" />}
          </>
        )}
      />
      <Route
        exact
        path="/test/:testId(\d+)/directions"
        render={(props) => (
          <>
            <TopNavBar
              isTestCard={true}
              hasUser={hasUser}
              isAuthenticated={isAuthenticated}
              setHasUser={setHasUser}
              testId={props.match.params.testId}
            />
            <TestNavBar {...props} />
            {hasUser ? <TestDirections {...props} /> : <Redirect to="/login" />}
          </>
        )}
      />
    </>
  );
};

export default ApplicationViews;
