import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const FullTestCard = (props) => {
  const [test, setTest] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
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
    }
    return () => (mounted = false);
  }, [props.match.params.testId]);

  return (
    <>
      <div className="mainBody">
        <div className="recipe-title">
          <h3>{test.title}</h3>
          <button
            onClick={() => {
              props.history.push(`/test/${props.testId}/edit`);
            }}
          >
            &#x270e; Edit
          </button>
          <button
            onClick={() => {
              DataManager.delete(
                "recipes",
                props.match.params.testId
              ).then(() => props.history.push("/tests"));
            }}
          >
            &#x2718; Delete
          </button>
        </div>
        <p className="prep-cookTime">Prep Time: {test.prepTime}</p>
        <p className="prep-cookTime">Cook Time: {test.cookTime}</p>
      </div>
      <div className="ingContainer">
        <h3 className="ingHeader">Ingredients</h3>
        <div className="container-ingredients">
          {ingredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.info}</p>
          ))}
        </div>
        {/* <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button> */}
      </div>
    </>
  );
};

export default FullTestCard;
