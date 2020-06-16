import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataManager from "../../modules/DataManager";
// import RecipeNavBar from "../navbars/RecipeNavBar";

const FullRecipeCard = (props) => {
  const [recipe, setRecipe] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DataManager.get("recipes", props.match.params.recipeId).then((recipe) => {
      setRecipe({
        title: recipe.title,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
      });
    });
  }, [props.match.params.recipeId]);

  return (
    <>
      <div>
        <h3>{recipe.title}</h3>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Cook Time: {recipe.cookTime}</p>
      </div>
      <Link to="/recipes">
        <button type="button">Back</button>
      </Link>
    </>
  );
};

export default FullRecipeCard;
