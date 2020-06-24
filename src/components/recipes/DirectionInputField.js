import React from "react";

const DirectionInputField = (props) => {
  const dirId = `direction-${props.idx}`;
  return (
    <div key={`direction-${props.idx}`}>
      <label htmlFor={dirId}>{`#${props.idx + 1}`}</label>
      <input
        type="text"
        name={dirId}
        data-idx={props.idx}
        id={dirId}
        className="info"
        value={props.directions[props.idx].info}
        onChange={props.handleDynamicChange}
      />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          props.removeItem(props.directions, props.idx, props.setDirections);
        }}
      >
        X
      </button>
    </div>
  );
};

export default DirectionInputField;
