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
        value={props.isNote ? props.notes[props.idx].info : undefined}
        value={props.isIng ? props.ingredients[props.idx].info : undefined}
        value={props.isDir ? props.directions[props.idx].info : undefined}
        onChange={props.handleDynamicChange}
      />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          return (
            <>
              {props.isNote
                ? removeItem(props.notes, props.idx, props.setNotes)
                : null}

              {props.isIng
                ? removeItem(props.ingredients, props.idx, props.setIngredients)
                : null}

              {props.isNote
                ? removeItem(props.directions, props.idx, props.setDirections)
                : null}
            </>
          );
        }}
      >
        &#x2718;
      </button>
    </div>
  );
};

export default NoteInputField;
