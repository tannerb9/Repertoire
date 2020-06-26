import React from "react";
import { Link } from "react-router-dom";

const MiniTestCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{props.test.title}</h3>
        {/* REFERENCE FOR IMPLEMENTING PHOTOS
        
        <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        {/* <p>Prep Time: {props.test.prepTime}</p>
        <p>Cook Time: {props.test.cookTime}</p> */}
        <p>Version Count: {props.test.testCount}</p>
        <Link to={`/test/${props.test.id}/versions`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MiniTestCard;
