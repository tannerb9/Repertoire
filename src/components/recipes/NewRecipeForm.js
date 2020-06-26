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

    let newId;
    recipe.versionNumber = 0;
    recipe.userId = userId;
    recipe.isTest = false;
    recipe.originalRecipeId = null;

    DataManager.post("recipes", recipe)
      .then((newRecipe) => {
        newId = newRecipe.id;
        return Promise.all([
          ...ingredients.map((ingredient) => {
            ingredient.recipeId = newRecipe.id;
            return DataManager.post("ingredients", ingredient);
          }),
          ...notes.map((note) => {
            note.recipeId = newRecipe.id;
            return DataManager.post("notes", note);
          }),
          ...directions.map((direction) => {
            direction.recipeId = newRecipe.id;
            return DataManager.post("directions", direction);
          }),
        ]);
      })
      //
      .then(() => props.history.push(`/recipe/${newId}`));
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
              setIngredients={setIngredients}
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
              setNotes={setNotes}
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
              setDirections={setDirections}
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
