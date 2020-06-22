import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
// import RecipeNavBar from "../navbars/RecipeNavBar";

const FullTestCard = (props) => {
  const [test, setTest] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.testId,
      "ingredients"
    ).then((test) => {
      setTest({
        title: test.title,
        prepTime: test.prepTime,
        cookTime: test.cookTime,
      });
      setIngredients(test.ingredients);
    });
  }, [props.match.params.testId]);

  return (
    <>
      <div>
        <h3>{test.title}</h3>
        <p>Prep Time: {test.prepTime}</p>
        <p>Cook Time: {test.cookTime}</p>
      </div>
      <div>
        <h3>Ingredients</h3>
        <div className="container-ingredients">
          {ingredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.info}</p>
          ))}
        </div>
        <button
          onClick={() => {
            DataManager.delete("recipes", props.match.params.testId).then(
              props.history.push("/tests")
            );
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default FullTestCard;
