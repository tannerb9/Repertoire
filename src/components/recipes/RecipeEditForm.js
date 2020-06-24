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
    userId: 0,
    isTest: false,
    originalRecipeId: 0,
  });
  const [directions, setDirections] = useState([{ ...emptyObj }]);
  const [ingredients, setIngredients] = useState([{ ...emptyObj }]);
  const [notes, setNotes] = useState([{ ...emptyObj }]);
  const [isLoading, setIsLoading] = useState(false);

  const appendItem = (arr, obj, func) => {
    func([...arr, { ...obj }]);
  };

  const removeItem = (arr, idx, func) => {
    const copyOfArr = [...arr];
    copyOfArr.splice(idx, 1);
    func(copyOfArr);
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
      userId: userId,
      isTest: false,
      originalRecipeId: null,
      id: props.match.params.recipeId,
    };

    DataManager.edit("recipes", editedRecipe)
      .then((recipe) => {
        Promise.all([
          ingredients.forEach((ingredient) => {
            if (ingredient.id) {
              updateExistingObj("ingredients", ingredient);
            } else {
              ingredient.recipeId = recipe.id;
              DataManager.post("ingredients", ingredient);
            }
          }),
          notes.forEach((note) => {
            if (note.id) {
              updateExistingObj("notes", note);
            } else {
              note.recipeId = recipe.id;
              DataManager.post("notes", note);
            }
          }),
          directions.forEach((direction) => {
            if (direction.id) {
              updateExistingObj("directions", direction);
            } else {
              direction.recipeId = recipe.id;
              DataManager.post("directions", direction);
            }
          }),
        ]);
      })
      .then(() => props.history.push(`/recipe/${props.match.params.recipeId}`));
  };

  const updateExistingObj = (tab, obj) => {
    const editedObj = {
      info: obj.info,
      recipeId: parseInt(props.match.params.recipeId),
      id: obj.id,
    };

    DataManager.edit(tab, editedObj);
  };

  useEffect(() => {
    DataManager.getWithObjs(
      "recipes",
      props.match.params.recipeId,
      "ingredients"
    ).then((recipe) => {
      setRecipe(recipe);
      setIngredients(recipe.ingredients);
      setIsLoading(false);
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
      setIsLoading(false);
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
      setIsLoading(false);
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
              removeItem={removeItem}
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
              removeItem={removeItem}
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
              removeItem={removeItem}
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
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default RecipeEditForm;
