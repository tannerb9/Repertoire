import React from "react";
import { Link } from "react-router-dom";

const MiniVersionCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{props.version.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <p>Prep Time: {props.version.prepTime}</p>
        <p>Cook Time: {props.version.cookTime}</p>
        <Link to={`/test/${props.version.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MiniVersionCard;
