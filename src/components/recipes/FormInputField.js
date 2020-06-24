import React from "react";

const FormInputField = (props) => {
  // const [deletes, setDeletes] = useState([]);
  const ingId = `ingredient-${props.idx}`;

  return (
    <div className="hidden" key={`ingredient-${props.idx}`}>
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
        onClick={(evt) => {
          evt.preventDefault();
          props.removeItem(props.ingredients, props.idx, props.setIngredients);
        }}
      >
        X
      </button>
    </div>
  );
};

export default FormInputField;
