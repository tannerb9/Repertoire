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
      <div className="card-content recipeMiniCard">
        <h3 className="card-title">{props.recipe.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <div className="container-times">
          <div className="times">
            <img
              src={require("../../Icons/chef-knife-80.png")}
              alt="Prep Time"
            />
            <p>{props.recipe.prepTime} mins</p>
          </div>
          <div className="times">
            <img src={require("../../Icons/chef-hat-80.png")} alt="Cook Time" />
            <p>{props.recipe.cookTime} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeMiniCard;
