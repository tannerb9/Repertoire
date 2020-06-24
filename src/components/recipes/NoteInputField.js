import React from "react";
import DataManager from "../../modules/DataManager";

const NoteInputField = (props) => {
  const noteId = `note-${props.idx}`;
  return (
    <div key={`note-${props.idx}`}>
      <label htmlFor={noteId}>{`#${props.idx + 1}`}</label>
      <input
        type="text"
        name={noteId}
        data-idx={props.idx}
        id={noteId}
        className="info"
        value={props.notes[props.idx].info}
        onChange={props.handleDynamicChange}
      />
      <button
        onClick={() => {
          DataManager.delete("notes", props.notes[props.idx].id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default NoteInputField;
