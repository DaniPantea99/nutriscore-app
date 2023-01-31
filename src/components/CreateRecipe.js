import React, { useState } from 'react';
import SearchItem from './SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';
import { createRecipe } from '../actions/recipesAction'

function CreateRecipe({ toggleSidePanel }) {
  const { filtered } = useSelector((state) => state.ingredients);  
  const dispatch = useDispatch();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('ro-RO', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const [listOfIngredients, setListOfIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState();

  const AddNewIngredient = (ingredient) => {
      setListOfIngredients((prev) => [
        ...prev,
        {
          productName: ingredient.product_name,
          quantity: '',
        },
      ]);
    }

  const getIngredient = (e) => {
    listOfIngredients.forEach((el, index) => {
      if(el.productName === e.name) {
        el.quantity = e.value
      }
    })
  }

  const removeIngredient = (e) => {
   
    // const filterList = listOfIngredients.filter(item => item.productName !== event.name  )
    // setListOfIngredients(filterList)
    console.log(e)
  }

  function createNewRecipe() {
    const recipe = {
      recipeName: recipeName,
      qty: '200',
      date: formattedDate,
      ingredients: [
        ...listOfIngredients
      ],
    };
    dispatch(createRecipe(recipe))
    toggleSidePanel()
  }
  
  // function CloseAndDiscard() {
  //   setShowRecipePanel(false);
  // }
  
  return (
    <div className="flex flex-col justify-between h-full p-4 overflow-auto text-gray-900 bg-gray-100 shadow-2xl md:px-10">
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
          className="w-full h-12 p-3 mb-6 text-base bg-white recipe-name rounded-xl placeholder:text-gray-600"
          placeholder="Recipe name..."
          type="text"
          id="recipe-name"
          name="recipe-name"
          onChange={(event) => setRecipeName(event.target.value)}
        />

        <label
          htmlFor="search-ingredients"
          className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
        >
          Search Ingredients
        </label>
        <SearchItem
          database={filtered}
          onSelect={AddNewIngredient}
        />

        <div className="flex flex-col mt-6 list-of-ingredients rounded-xl max-h-48 md:max-h-60 min-w-fit ">
          <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide snap-y">
            {(listOfIngredients.length > 0) && listOfIngredients.map((item, index) => (
              <Ingredient
                item={item}
                key={index}
                index={index}
                getIngredient={getIngredient}
                removeIngredient={removeIngredient}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <button
          className="p-4 font-semibold tracking-widest text-white bg-orange-500 rounded-2xl hover:bg-orange-400 active:bg-orange-600"
          onClick={createNewRecipe}
        >
          Save New Recipe
        </button>
        <button
          className="p-4 font-semibold tracking-widest bg-blue-300 rounded-2xl hover:bg-blue-200 active:bg-blue-400"
          onClick={toggleSidePanel}
        >
          Discard my changes
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
