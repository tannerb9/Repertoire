import React from "react";
import "../../styles/cards.css";

const MiniTestCard = (props) => {
  return (
    <div
      className={props.color === "#FFFFFF" ? "whiteCard" : "grayCard"}
      onClick={() => {
        props.history.push(`/test/${props.test.id}/versions`);
      }}
    >
      <div className="card-content">
        <h3 className="card-title">{props.test.title}</h3>
        {/* REFERENCE FOR IMPLEMENTING PHOTOS
        
        <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        {/* <p>Prep Time: {props.test.prepTime}</p>
        <p>Cook Time: {props.test.cookTime}</p> */}
        {/* <p>Version Count: {props.test.testCount}</p> */}
      </div>
    </div>
  );
};

export default MiniTestCard;
