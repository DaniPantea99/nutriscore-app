import React from 'react';
// import SearchItem from './SearchItem';
// import { useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';

function CreateRecipe({ state }) {
  // const {filtered} = useSelector((state) => state.ingredients)

  return (
    <div className="h-full bg-gray-200 p-10 text-gray-900">
      <h3 className="mt-20 text-xl font-semibold">
        To create a new recipe, please type in all the information below.
      </h3>

      <label
        htmlFor="recipe-name"
        className="block uppercase tracking-wider text-gray-900 font-semibold"
      >
        Recipe Name
      </label>
      <input
        className="rounded-2xl h-14 text-xl p-4 bg-blue-300 placeholder:text-gray-600"
        placeholder="Recipe name..."
        type="text"
        id="recipe-name"
        name="recipe-name"
      />

      {/* <SearchItem 
        database={filtered}
      /> */}

      <div className="list-of-ingredients">
        <Ingredient label="Sare" />
      </div>

      <div>
        <button
          className="bg-blue-200 p-4 rounded-3xl"
          onClick={() => state(false)}
        >
          Discard my changes
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
