import React, {useState} from 'react';
import SearchItem from './SearchItem';
import { useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';

function CreateRecipe({ state }) {
  const { filtered } = useSelector((state) => state.ingredients);

  function CloseAndDiscard() {
    state(false);
  }

  let listOfRecipes = [
    {
      recipeName: '',
      ingredients: []
    },
  ]

  let listOfIngredients = [
    // {
    //   ingredientName: '',
    //   ingredientQty: '',
    // },
  ]

  const [newListOfIngredients, setNewListOfIngredients] = useState(listOfIngredients)
  const [newRecipe, setNewRecipe] = useState(listOfRecipes)

  function CreateNewRecipe() {
    const recipeName = document.querySelector('.recipe-name').value;
    setNewRecipe(
      {
        recipeName: {recipeName},
        ingredients: 
      [
        // {listOfIngredients},
      ]
      }
    )
    console.log(recipeName)
    console.log(newRecipe)
    console.log(listOfIngredients)
  }

  return (
    <div className="flex flex-col justify-between h-full p-4 overflow-auto text-gray-900 bg-gray-200 md:px-10 ">
      <div className="sm:my-8">
        <h3 className="mb-8 text-lg font-semibold">
          To create a new recipe, please type in all the information below.
        </h3>

        <label
          htmlFor="recipe-name"
          className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
        >
          Recipe Name
        </label>
        <input
          className="w-full h-12 p-3 mb-6 text-base bg-blue-300 recipe-name rounded-xl placeholder:text-gray-600"
          placeholder="Recipe name..."
          type="text"
          id="recipe-name"
          name="recipe-name"
        />

      <label
          htmlFor="search-ingredients"
          className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
        >
          Search Ingredients
        </label>
        <SearchItem 
        database={filtered} 
        setNewListOfIngredients={setNewListOfIngredients}
        newListOfIngredients={newListOfIngredients}
        />

        {listOfIngredients.length !== 0 &&

          <div className="flex flex-col p-2 mt-6 bg-gray-100 list-of-ingredients rounded-xl max-h-48 md:max-h-60 min-w-fit ">
          <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide snap-y no-scrollbar">

            
             {listOfIngredients.map((item, index) => 
             <Ingredient
             newListOfIngredients={newListOfIngredients}
             setNewListOfIngredients={setNewListOfIngredients}
             label={item} key={index} />)}

          </div>
        </div>
            }
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <button className="p-4 font-semibold tracking-widest text-white bg-orange-600 rounded-2xl"
        onClick={CreateNewRecipe}>
          Save New Recipe
        </button>
        <button
          className="p-4 font-semibold tracking-widest bg-blue-300 rounded-2xl"
          onClick={CloseAndDiscard}
        >
          Discard my changes
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
