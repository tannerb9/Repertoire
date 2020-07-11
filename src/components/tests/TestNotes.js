import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const TestNotes = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    DataManager.getWithObjs("recipes", props.match.params.testId, "notes").then(
      (test) => {
        setNotes(test.notes);
      }
    );
  }, [props.match.params.testId]);

  // REMOVE H3 NOTES ONCE TAB IS INDICATED VIA UNDERLINE ETC
  return (
    <>
      <div className="mainBody">
        <h3>Notes</h3>
      </div>
      <div className="container-notes">
        {notes.map((note) => (
          <p key={note.id}>{note.info}</p>
        ))}
      </div>
    </>
  );
};

export default TestNotes;
