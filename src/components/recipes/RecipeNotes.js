import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import "../../styles/cards.css";

const RecipeNotes = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "notes"
    ).then((recipe) => {
      setNotes(recipe.notes);
    });
  }, [props.match.params.recipeId]);

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

export default RecipeNotes;
