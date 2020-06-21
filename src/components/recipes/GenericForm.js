import React from "react";

const GenForm = (props) => {
  return (
    <form>
      <input type="text" defaultValue={props.inputText} />
      <button>{props.isEdit ? "edit" : "add"}</button>
    </form>
  );
};

export default GenForm;
