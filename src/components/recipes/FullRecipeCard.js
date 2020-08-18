import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const FullRecipeCard = (props) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      DataManager.getWithObjs(
        "recipes",
        props.match.params.recipeId,
        "ingredients"
      ).then((recipe) => {
        setRecipe({
          title: recipe.title,
          prepTime: recipe.prepTime,
          cookTime: recipe.cookTime,
        });
        setIngredients(recipe.ingredients);
      });
    }
    return () => (mounted = false);
  }, [props.match.params.recipeId]);

  return (
    <>
      <div className="mainBody">
        <div className="recipe-title recipe-buttons">
          <h3>{recipe.title}</h3>
          <button
            onClick={() => {
              props.history.push(`/recipe/${props.recipeId}/edit`);
            }}
          >
            &#x270e; Edit
          </button>
          <button
            onClick={() => {
              DataManager.delete(
                "recipes",
                props.match.params.recipeId
              ).then(() => props.history.push("/recipes"));
            }}
          >
            &#x2718; Delete
          </button>
        </div>
        <p className="prep-cookTime">
          Prep Time: {recipe.prepTime} minutes
        </p>
        <p className="prep-cookTime">
          Cook Time: {recipe.cookTime} minutes
        </p>
      </div>
      <div className="ingContainer">
        <h3 className="ingHeader">Ingredients</h3>
        <div className="container-ingredients">
          {ingredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.info}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullRecipeCard;
