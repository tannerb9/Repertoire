import React from "react";
import { removeItem } from "../../helpers/functions";

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
        onClick={(evt) => {
          evt.preventDefault();
          removeItem(props.notes, props.idx, props.setNotes);
        }}
      >
        &#x2718;
      </button>
    </div>
  );
};

export default NoteInputField;
