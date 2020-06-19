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
        value={props.directions[props.idx].direction}
        onChange={props.handleDynamicChange}
      />
    </div>
  );
};

export default DirectionInputField;
