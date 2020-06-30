import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const RecipeMiniCard = (props) => {
  const alternatingColor = ["#FFFFFF", "#D3D3D3"];
  return (
    <div
      className="card"
      onClick={() => {
        props.history.push(`/recipe/${props.recipe.id}`);
      }}
      color={alternatingColor[index % alternatingColor.length]}
    >
      <div className="card-content">
        <h3 className="card-title">{props.recipe.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <p>Prep Time: {props.recipe.prepTime} mins</p>
        <p>Cook Time: {props.recipe.cookTime} mins</p>
        {/* <Link to={`/recipe/${props.recipe.id}`}>
          <button>Details</button>
        </Link> */}
      </div>
    </div>
  );
};

export default RecipeMiniCard;
