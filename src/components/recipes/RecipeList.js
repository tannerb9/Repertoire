import React, { useEffect, useState } from "react";
import MiniRecipeCard from "./MiniRecipeCard";
import DataManager from "../../modules/DataManager";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const userId = JSON.parse(sessionStorage.credentials);

  useEffect(() => {
    DataManager.getUsersRecipes(userId).then((recipesFromApi) => {
      const notTests = recipesFromApi.recipes.filter(
        (notTest) => notTest.isTest === false
      );
      setRecipes(notTests);
    });
  }, [userId]);

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
          props.history.push("/recipe/new");
        }}
      >
        Add Recipe
      </button>
    </>
  );
};

export default RecipeList;
