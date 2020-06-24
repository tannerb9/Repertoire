import React from "react";
import DataManager from "../../modules/DataManager";

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
        onClick={() => {
          DataManager.delete("directions", props.directions[props.idx].id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default DirectionInputField;
