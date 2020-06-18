import React from "react";

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
        value={props.ingredients[props.idx].ingredient}
        onChange={props.handleDynamicChange}
      />
    </div>
  );
};

export default FormInputField;
