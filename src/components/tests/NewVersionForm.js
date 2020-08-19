import React, { useEffect, useState } from "react";
import DataManager from "../../modules/DataManager";
import FormInputField from "../recipes/FormInputField";
import DirectionInputField from "../recipes/DirectionInputField";
import NoteInputField from "../recipes/NoteInputField";
import { handleFieldChange } from "../../helpers/functions";
import "../../styles/forms.css";

const NewVersionForm = (props) => {
  const userId = JSON.parse(sessionStorage.credentials);
  const emptyObj = { info: "" };
  // DIFF
  const [recipe, setRecipe] = useState({
    title: "",
    prepTime: 0,
    cookTime: 0,
    userId: 0,
    isTest: false,
    versionNumber: 0,
    originalRecipeId: 0,
  });
  const [directions, setDirections] = useState([{ ...emptyObj }]);
  const [ingredients, setIngredients] = useState([{ ...emptyObj }]);
  const [notes, setNotes] = useState([{ ...emptyObj }]);
  const [isLoading, setIsLoading] = useState(false);

  const appendItem = (arr, obj, func) => {
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

    // DIFF
    const recipeFromState = {
      title: recipe.title,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      userId: userId,
      isTest: true,
      versionNumber: recipe.versionNumber + 1,
      originalRecipeId: parseInt(props.match.params.testId),
    };

    let newId;

    DataManager.post("recipes", recipeFromState)
      .then((newRecipe) => {
        newId = newRecipe.id;
        return Promise.all([
          ...ingredients.map((ingredient) => {
            delete ingredient.id;
            ingredient.recipeId = newRecipe.id;
            return DataManager.post("ingredients", ingredient);
          }),
          ...notes.map((note) => {
            delete note.id;
            note.recipeId = newRecipe.id;
            return DataManager.post("notes", note);
          }),
          ...directions.map((direction) => {
            delete direction.id;
            direction.recipeId = newRecipe.id;
            return DataManager.post("directions", direction);
          }),
        ]);
      })
      .then(() => props.history.push(`/test/${newId}`));
  };

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.testId,
      "ingredients"
    ).then((recipe) => {
      setRecipe(recipe);
      setIngredients(recipe.ingredients);
    });
  }, [props.match.params.testId]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.testId,
      "notes"
    ).then((recipe) => {
      setRecipe(recipe);
      setNotes(recipe.notes);
    });
  }, [props.match.params.testId]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.testId,
      "directions"
    ).then((recipe) => {
      setRecipe(recipe);
      setDirections(recipe.directions);
    });
  }, [props.match.params.testId]);

  return (
    <form onSubmit={constructRecipe}>
      <fieldset>
        <div className="formgrid">
          <h1>New Version</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            value={recipe.title}
            autoFocus
            onChange={(evt) =>
              handleFieldChange(evt, recipe, setRecipe)
            }
          />
          <label htmlFor="prepTime">Prep Time</label>
          <input
            type="number"
            id="prepTime"
            value={recipe.prepTime}
            placeholder="In minutes"
            onChange={(evt) =>
              handleFieldChange(evt, recipe, setRecipe)
            }
          />
          <label htmlFor="cookTime">Cook Time</label>
          <input
            type="number"
            id="cookTime"
            value={recipe.cookTime}
            placeholder="In minutes"
            onChange={(evt) =>
              handleFieldChange(evt, recipe, setRecipe)
            }
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
            className="new-field-btn"
            value="New Ingredient"
            onClick={() =>
              appendItem(ingredients, emptyObj, setIngredients)
            }
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
            className="new-field-btn"
            value="New Note"
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
            className="new-field-btn"
            value="New Direction"
            onClick={() =>
              appendItem(directions, emptyObj, setDirections)
            }
          />
          <button
            className="submit-btn"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default NewVersionForm;
