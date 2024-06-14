import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const RecipeDirections = (props) => {
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "directions"
    ).then((recipe) => {
      setDirections(recipe.directions);
    });
  }, [props.match.params.recipeId]);

  return (
    <>
      <div className="mainBody">
        <h3>Directions</h3>
      </div>
      <div className="container-directions">
        {directions.map((direction) => (
          <p key={direction.id}>{direction.info}</p>
        ))}
      </div>
    </>
  );
};

export default RecipeDirections;
