import React, { useState } from "react";
import DataManager from "../../modules/DataManager";
import FormInputField from "./FormInputField";
import DirectionInputField from "./DirectionInputField";
import NoteInputField from "./NoteInputField";
import { handleFieldChange } from "../../helpers/functions";
import "../../styles/forms.css";

const NewRecipeForm = (props) => {
  const userId = JSON.parse(sessionStorage.credentials);
  const emptyObj = { info: "" };
  const [recipe, setRecipe] = useState({});
  const [directions, setDirections] = useState([{ ...emptyObj }]);
  const [ingredients, setIngredients] = useState([{ ...emptyObj }]);
  const [notes, setNotes] = useState([{ ...emptyObj }]);
  const [isLoading, setIsLoading] = useState(false);

  const appendItem = (arr, obj, func) => {
    // CREATE TERNARY HERE
    func([...arr, { ...obj }]);
  };

  const handleDynamicChange = (evt, arr, func) => {
    const stateToChange = [...arr];
    stateToChange[evt.target.dataset.idx][evt.target.className] =
      evt.target.value;
    func(stateToChange);
  };

  const constructRecipe = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    recipe.userId = userId;
    recipe.isTest = false;
    recipe.recipeId = null;
    let recipeId;
    DataManager.post("recipes", recipe)
      .then((newRecipe) => {
        ingredients.forEach((ingredient) => {
          recipeId = newRecipe.id;
          ingredient.recipeId = recipeId;
          DataManager.post("ingredients", ingredient);
        });
      })
      .then(() => {
        notes.forEach((note) => {
          note.recipeId = recipeId;
          DataManager.post("notes", note);
        });
      })
      .then(() => {
        directions.forEach((direction) => {
          direction.recipeId = recipeId;
          DataManager.post("directions", direction);
        });
      })
      //
      .then(() => props.history.push("/recipes"));
  };

  return (
    <form onSubmit={constructRecipe}>
      <fieldset>
        <div className="formgrid">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            autoFocus
            onChange={(evt) => handleFieldChange(evt, recipe, setRecipe)}
          />
          <label htmlFor="prepTime">Prep Time</label>
          <input
            type="number"
            id="prepTime"
            placeholder="Numbers only"
            onChange={(evt) => handleFieldChange(evt, recipe, setRecipe)}
          />
          <label htmlFor="cookTime">Cook Time</label>
          <input
            type="number"
            id="cookTime"
            placeholder="Numbers only"
            onChange={(evt) => handleFieldChange(evt, recipe, setRecipe)}
          />
          <label htmlFor="ingredient">Ingredients</label>
          {ingredients.map((val, idx) => (
            <FormInputField
              key={`ingredient-${idx}`}
              idx={idx}
              ingredients={ingredients}
              handleDynamicChange={(evt) =>
                handleDynamicChange(evt, ingredients, setIngredients)
              }
            />
          ))}
          <input
            type="button"
            value="Add Another Ingredient"
            onClick={() => appendItem(ingredients, emptyObj, setIngredients)}
          />
          <label htmlFor="note">Notes</label>
          {notes.map((val, idx) => (
            <NoteInputField
              key={`note-${idx}`}
              idx={idx}
              notes={notes}
              handleDynamicChange={(evt) =>
                handleDynamicChange(evt, notes, setNotes)
              }
            />
          ))}
          <input
            type="button"
            value="Add Another Note"
            onClick={() => appendItem(notes, emptyObj, setNotes)}
          />
          <label htmlFor="direction">Directions</label>
          {directions.map((val, idx) => (
            <DirectionInputField
              key={`direction-${idx}`}
              idx={idx}
              directions={directions}
              handleDynamicChange={(evt) =>
                handleDynamicChange(evt, directions, setDirections)
              }
            />
          ))}
          <input
            type="button"
            value="Add Another Direction"
            onClick={() => appendItem(directions, emptyObj, setDirections)}
          />
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default NewRecipeForm;
