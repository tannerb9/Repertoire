import React from "react";
import { removeItem } from "../../helpers/functions";

const FormInputField = (props) => {
  const ingId = `ingredient-${props.idx}`;

  return (
    <div
      className="hidden edit-input-field"
      key={`ingredient-${props.idx}`}
    >
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
        className="delete-btn"
        onClick={(evt) => {
          evt.preventDefault();
          removeItem(
            props.ingredients,
            props.idx,
            props.setIngredients
          );
        }}
      >
        &#x2718;
      </button>
    </div>
  );
};

export default FormInputField;
