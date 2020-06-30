import React, { useState, useEffect } from "react";
import DataManager from "../../modules/DataManager";
import FormInputField from "./FormInputField";
import DirectionInputField from "./DirectionInputField";
import NoteInputField from "./NoteInputField";
import { handleFieldChange } from "../../helpers/functions";
import "../../styles/forms.css";

const RecipeEditForm = (props) => {
  const userId = JSON.parse(sessionStorage.credentials);
  const emptyObj = { info: "", id: 0, recipeId: 0 };
  const [recipe, setRecipe] = useState({
    title: "",
    prepTime: 0,
    cookTime: 0,
    versionNumber: 0,
    userId: 0,
    isTest: false,
    originalRecipeId: null,
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

  const updateAll = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedRecipe = {
      title: recipe.title,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      userId: parseInt(userId),
      isTest: recipe.isTest,
      versionNumber: recipe.versionNumber,
      originalRecipeId: recipe.originalRecipeId,
      id: parseInt(props.match.params.recipeId),
    };

    Promise.all(DataManager.delete("recipes", props.match.params.recipeId))
      .then(() => DataManager.post("recipes", editedRecipe))
      .then((recipe) => {
        return Promise.all([
          ...ingredients.map((ingredient) => {
            ingredient.recipeId = recipe.id;
            return DataManager.post("ingredients", ingredient);
          }),
          ...notes.map((note) => {
            note.recipeId = recipe.id;
            return DataManager.post("notes", note);
          }),
          ...directions.map((direction) => {
            direction.recipeId = recipe.id;
            return DataManager.post("directions", direction);
          }),
        ]);
      })
      .then(() => {
        if (recipe.isTest === false) {
          props.history.push(`/recipe/${props.match.params.recipeId}`);
        } else {
          props.history.push(`/test/${props.match.params.recipeId}/versions`);
        }
      });
  };

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "ingredients"
    ).then((recipe) => {
      setRecipe(recipe);
      setIngredients(recipe.ingredients);
    });
  }, [props.match.params.recipeId]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "notes"
    ).then((recipe) => {
      setRecipe(recipe);
      setNotes(recipe.notes);
    });
  }, [props.match.params.recipeId]);

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "directions"
    ).then((recipe) => {
      setRecipe(recipe);
      setDirections(recipe.directions);
    });
  }, [props.match.params.recipeId]);

  return (
    <form onSubmit={updateAll}>
      <fieldset>
        <div className="formgrid">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            value={recipe.title}
            autoFocus
            onChange={(evt) => handleFieldChange(evt, recipe, setRecipe)}
          />
          <label htmlFor="prepTime">Prep Time</label>
          <input
            type="number"
            id="prepTime"
            value={recipe.prepTime}
            placeholder="Numbers only"
            onChange={(evt) => handleFieldChange(evt, recipe, setRecipe)}
          />
          <label htmlFor="cookTime">Cook Time</label>
          <input
            type="number"
            id="cookTime"
            value={recipe.cookTime}
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
              value={ingredients[idx].info}
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
              value={notes[idx].info}
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
              value={directions[idx].info}
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
          <div>
            <label>
              <input
                type="radio"
                name="choice"
                checked={recipe.isTest === false}
                onChange={() =>
                  setRecipe({
                    title: recipe.title,
                    prepTime: recipe.prepTime,
                    cookTime: recipe.cookTime,
                    userId: recipe.userId,
                    isTest: false,
                    versionNumber: recipe.versionNumber,
                    originalRecipeId: recipe.originalRecipeId,
                  })
                }
              />
              Recipe
            </label>
            <label>
              <input
                type="radio"
                name="choice"
                checked={recipe.isTest === true}
                onChange={() =>
                  setRecipe({
                    title: recipe.title,
                    prepTime: recipe.prepTime,
                    cookTime: recipe.cookTime,
                    userId: recipe.userId,
                    isTest: true,
                    versionNumber: 1,
                    originalRecipeId: parseInt(props.match.params.recipeId),
                  })
                }
              />
              Test
            </label>
          </div>
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default RecipeEditForm;
