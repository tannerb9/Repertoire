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
      <div className="card-content versionMiniCard">
        <h3 className="card-title cardVersions">{props.version.title}</h3>
        {/* <picture>
        <img src={require(`./${}`)} alt={props.recipe.title} />
      </picture> */}
        <div className="container-times">
          <div className="times">
            <img
              src={require("../../Icons/chef-knife-80.png")}
              alt="Prep Time"
            />
            <p>{props.version.prepTime} mins</p>
          </div>
          <div className="times">
            <img src={require("../../Icons/chef-hat-80.png")} alt="Cook Time" />
            <p>{props.version.cookTime} mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniVersionCard;
