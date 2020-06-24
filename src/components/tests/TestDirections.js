import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";

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
      <div>
        <h3>Directions</h3>
      </div>
      <div className="container-directions">
        {directions.map((direction) => (
          <p key={direction.id}>{direction.info}</p>
        ))}
      </div>
    </>
  );
};

export default TestDirections;
