import React, { useState } from "react";
import DataManager from "../../modules/DataManager";
import FormInputField from "./FormInputField";
import { handleFieldChange } from "../../helpers/functions";
import "../../styles/forms.css";

const NewRecipeForm = (props) => {
  const emptyIngredient = { info: "" };
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([{ ...emptyIngredient }]);
  const [isLoading, setIsLoading] = useState(false);

  // const handleRecipeChange = (evt) =>
  //   setRecipe({ ...recipe, [evt.target.name]: [evt.target.value] });

  const constructRecipe = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    DataManager.post("recipes", recipe).then(() =>
      props.history.push("/recipes")
    );
  };

  const appendIngredient = () => {
    setIngredients([...ingredients, { ...emptyIngredient }]);
  };

  const handleDynamicChange = (evt) => {
    const stateToChange = [...ingredients];
    stateToChange[evt.target.dataset.idx][evt.target.className] =
      evt.target.value;
    setIngredients(stateToChange);
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
              handleDynamicChange={handleDynamicChange}
            />
          ))}
          <input
            type="button"
            value="Add Another Ingredient"
            onClick={appendIngredient}
          />
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

export default NewRecipeForm;
