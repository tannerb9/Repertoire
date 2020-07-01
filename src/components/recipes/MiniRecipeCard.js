import React from "react";
import "../../styles/cards.css";

const RecipeMiniCard = (props) => {
  return (
    <div
      className={props.color === "#FFFFFF" ? "whiteCard" : "grayCard"}
      onClick={() => {
        props.history.push(`/recipe/${props.recipe.id}`);
      }}
    >
      <div className="card-content">
        <h3 className="card-title">{props.recipe.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <p>Prep Time: {props.recipe.prepTime} mins</p>
        <p>Cook Time: {props.recipe.cookTime} mins</p>
      </div>
    </div>
  );
};

export default RecipeMiniCard;
