import React from "react";
import { removeItem } from "../../helpers/functions";

const NoteInputField = (props) => {
  const noteId = `note-${props.idx}`;
  let value = "";

  if (props.isNote) {
    value = props.notes[props.idx].info;
  } else if (props.isIng) {
    value = props.ingredients[props.idx].info;
  } else if (props.isDir) {
    value = props.directions[props.idx].info;
  }

  return (
    <div className="edit-input-field" key={`note-${props.idx}`}>
      <label htmlFor={noteId}>{`#${props.idx + 1}`}</label>
      <input
        type="text"
        name={noteId}
        data-idx={props.idx}
        id={noteId}
        className="info"
        value={value}
        // value={props.isNote ? props.notes[props.idx].info : null}
        // value={props.isIng ? props.ingredients[props.idx].info : null}
        // value={props.isDir ? props.directions[props.idx].info : null}
        onChange={props.handleDynamicChange}
      />
      <button
        className="delete-btn"
        onClick={(evt) => {
          evt.preventDefault();
          return (
            <>
              {props.isNote
                ? removeItem(props.notes, props.idx, props.setNotes)
                : null}

              {props.isIng
                ? removeItem(
                    props.ingredients,
                    props.idx,
                    props.setIngredients
                  )
                : null}

              {props.isNote
                ? removeItem(
                    props.directions,
                    props.idx,
                    props.setDirections
                  )
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
