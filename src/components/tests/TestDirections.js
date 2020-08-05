import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const TestDirections = (props) => {
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.testId,
      "directions"
    ).then((recipe) => {
      setDirections(recipe.directions);
    });
  }, [props.match.params.testId]);

  return (
    <>
      <div className="mainBody">
        <h3>Directions</h3>
      </div>
      <div className="container-directions">
        {directions.map((direction, idx) => (
          <p key={direction.id}>
            {idx + 1}. {direction.info}
          </p>
        ))}
      </div>
    </>
  );
};

export default TestDirections;
