import React, { useState } from "react";

const RecipeOrTest = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="modal-container">
      <button onClick={() => props.history.push("/recipe/new")}>Recipe</button>
      <button onClick={() => props.history.push("/test/new")}>Test</button>
    </div>
  );
};

export default RecipeOrTest;
