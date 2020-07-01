import React from "react";
import "../../styles/cards.css";

const MiniVersionCard = (props) => {
  return (
    <div
      className={props.color === "#FFFFFF" ? "whiteCard" : "grayCard"}
      onClick={() => {
        props.history.push(`/test/${props.version.id}`);
      }}
    >
      <div className="card-content">
        <h3 className="card-title">{props.version.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <p>Prep Time: {props.version.prepTime}</p>
        <p>Cook Time: {props.version.cookTime}</p>
      </div>
    </div>
  );
};

export default MiniVersionCard;
