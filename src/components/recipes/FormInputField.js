import React from "react";
import DataManager from "../../modules/DataManager";

const FormInputField = (props) => {
  const ingId = `ingredient-${props.idx}`;
  return (
    <div key={`ingredient-${props.idx}`}>
      <label htmlFor={ingId}>{`#${props.idx + 1}`}</label>
      <input
        type="text"
        name={ingId}
        data-idx={props.idx}
        id={ingId}
        className="info"
        value={props.ingredients[props.idx].info}
        onChange={props.handleDynamicChange}
      />
      <button
        onClick={() => {
          DataManager.delete("ingredients", props.ingredients[props.idx].id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default FormInputField;
