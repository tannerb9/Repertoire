import React, { useEffect, useState } from "react";
import MiniRecipeCard from "./MiniRecipeCard";
import DataManager from "../../modules/DataManager";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    DataManager.getAll("recipes").then((recipesFromApi) => {
      const notTests = recipesFromApi.filter(
        (notTest) => notTest.isTest === false
      );
      setRecipes(notTests);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <div className="container-cards">
        {recipes.map((recipe) => (
          <MiniRecipeCard key={recipe.id} recipe={recipe} {...props} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          props.history.push("/recipes/new");
        }}
      >
        Add Recipe
      </button>
    </>
  );
};

export default RecipeList;
