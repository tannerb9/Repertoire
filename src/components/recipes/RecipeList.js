import React, { useEffect, useState } from "react";
import MiniRecipeCard from "./MiniRecipeCard";
import DataManager from "../../modules/DataManager";
import "../../styles/lists.css";

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
        <h3 className="tab">Recipes</h3>
        {recipes.map((recipe) => (
          <MiniRecipeCard key={recipe.id} recipe={recipe} {...props} />
        ))}
      </div>
      <button
        className="add-button"
        onClick={() => {
          props.history.push("/recipe/new");
        }}
      >
        &#x2b;
      </button>
    </>
  );
};

export default RecipeList;
