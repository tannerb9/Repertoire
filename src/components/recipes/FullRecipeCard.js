import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";

const FullRecipeCard = (props) => {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, [props.match.params.recipeId]);

  return (
    <>
      <div>
        <h3>{recipe.title}</h3>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Cook Time: {recipe.cookTime}</p>
      </div>
      <div>
        <h3>Ingredients</h3>
        <div className="container-ingredients">
          {ingredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.info}</p>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
    </>
  );
};

export default FullRecipeCard;
