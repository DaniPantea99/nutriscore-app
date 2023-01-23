import React, {useState} from 'react';
import SearchItem from './SearchItem';
import { useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';

function CreateRecipe({ state }) {
  const { filtered } = useSelector((state) => state.ingredients);

  function CloseAndDiscard() {
    state(false);
  }

  const [listOfIngredients, setListOfIngredients] = useState(['Sare', 'Piper'])

  return (
    <div className="flex flex-col justify-between h-full bg-gray-200 p-4 md:px-10 text-gray-900 min-w-fit">
      <section className="my-8">
        <h3 className="mb-8 md:mb-14 text-xl font-semibold">
          To create a new recipe, please type in all the information below.
        </h3>

        <label
          htmlFor="recipe-name"
          className="block uppercase tracking-wider text-gray-900 font-semibold ml-2 mb-1"
        >
          Recipe Name
        </label>
        <input
          className="rounded-2xl w-full lg:w-3/4 xl:w-2/4 h-14 text-xl p-4 bg-blue-300 placeholder:text-gray-600 mb-6"
          placeholder="Recipe name..."
          type="text"
          id="recipe-name"
          name="recipe-name"
        />

      <label
          htmlFor="search-ingredients"
          className="block uppercase tracking-wider text-gray-900 font-semibold ml-2 mb-1"
        >
          Search Ingredients
        </label>
        <SearchItem 
        database={filtered} 
        setListOfIngredients={setListOfIngredients}
        />

        <div className="list-of-ingredients flex flex-col rounded-2xl bg-gray-100 p-2 mt-6 max-h-60 md:max-h-96 min-w-fit ">
          <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide snap-y no-scrollbar">

            {listOfIngredients.map((item, index) => 
      <Ingredient label={item} key={index} />)}

          </div>
        </div>
      </section>

      <section className="flex flex-col mt-8 gap-3">
        <button className="bg-orange-600 p-4 rounded-2xl text-white tracking-widest font-semibold">
          Save New Recipe
        </button>
        <button
          className="bg-blue-200 p-4 rounded-2xl tracking-widest font-semibold"
          onClick={CloseAndDiscard}
        >
          Discard my changes
        </button>
      </section>
    </div>
  );
}

export default CreateRecipe;
