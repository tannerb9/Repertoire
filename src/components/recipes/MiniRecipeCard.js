import React from "react";
import { Link } from "react-router-dom";

const RecipeMiniCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{props.recipe.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <p>Prep Time: {props.recipe.prepTime} mins</p>
        <p>Cook Time: {props.recipe.cookTime} mins</p>
        <Link to={`/recipe/${props.recipe.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeMiniCard;
