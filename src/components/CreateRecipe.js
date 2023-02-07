import React, { useState } from 'react';
import SearchItem from './SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';
import { createRecipe, updateRecipe } from '../actions/recipesAction';
import { selectRecipe } from '../actions/recipesAction';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function CreateRecipe({ toggleSidePanel }) {
  const { filtered } = useSelector((state) => state.ingredients);
  const { selectedRecipe } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('ro-RO', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  function initList() {
    if (Object.keys(selectedRecipe).length === 0) {
      return [];
    } else {
      return selectedRecipe.ingredients;
    }
  }

  const [listOfIngredients, setListOfIngredients] = useState(initList);
  const [recipeName, setRecipeName] = useState();

  const AddNewIngredient = (ingredient) => {
    setListOfIngredients((prev) => [
      ...prev,
      {
        productName: ingredient.product_name,
        brand: ingredient.brands,
        quantity: null,
        calories_100: ingredient.calories,
        calories_currQty: null,
        nutriments: ingredient.nutriments,
        source: ingredient.sursa,
      },
    ]);
  };

  const getIngredient = (e) => {
    listOfIngredients.forEach((el, index) => {
      if (el.productName === e.name) {
        el.quantity = Number(e.value);
      }
      el.calories_currQty = (Number(el?.calories_100/100)*e.value) ?? 0
      // console.log(
      //   'actual calories qty',
      //   Number((el?.calories_100 / 100) * e.value)
      // );
    });
  };

  const removeIngredient = (e, item) => {
    e.stopPropagation();
    const filterList = listOfIngredients.filter(
      (el) => el.productName !== item.productName
    );
    setListOfIngredients(filterList);
  };

  function createNewRecipe(e) {
    e.preventDefault();
    if (listOfIngredients.length === 0) {
      alert('No ingredients selected.');
    } else {
      const recipe = {
        recipeName: recipeName,
        qty: listOfIngredients.reduce(
          (acc, curr) => acc + curr?.quantity ?? 0,
          0
        ),
        date: formattedDate,
        ingredients: [...listOfIngredients],
        nutriments: {
          calories: listOfIngredients.reduce(
            (acc, curr) => (acc ?? 0) + (curr?.calories_currQty ?? 0),
            0
          ),
          fat: 0,
          saturated_fat: 0,
          carbohydrates: 0,
          sugars: 0,
          proteins: 0,
          salt: 0,
        },
      };
      if (selectedRecipe?.id) {
        dispatch(updateRecipe(recipe));
      } else {
        dispatch(createRecipe(recipe));
      }
      toggleSidePanel();
    }
  }

  function CloseAndDiscard() {
    dispatch(selectRecipe([]));
    toggleSidePanel();
  }

  // function Calculate() {
  //   listOfIngredients.nutriments?.map((item) => console.log(item));
  // }


  return (
    <div className="flex flex-col h-full p-4 text-gray-900 bg-gray-100 shadow-2xl md:px-7">
      {/* <button onClick={() => console.log(listOfIngredients)}>test</button> */}
      <h2 className="text-base font-semibold">
        To create a new recipe, please type in all the information below.
      </h2>
      <form
        action="submit"
        onSubmit={createNewRecipe}
        className="flex flex-col h-full mt-8 overflow-hidden grow"
      >
        <div className="overflow-auto grow">
          <div className="header">
            <label
              htmlFor="recipe-name"
              className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
            >
              Recipe Name
            </label>
            <input
              required
              defaultValue={selectedRecipe.recipeName}
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
              listOfIngredients={listOfIngredients}
            />
          </div>

          <div className="flex flex-col mt-6 list-of-ingredients rounded-xl min-w-fit">
            {listOfIngredients.length > 0 && <h3>List of Ingredients:</h3>}
            <div className="flex flex-col gap-2 mb-6">
              {listOfIngredients.length > 0 &&
                listOfIngredients.map((item, index) => (
                  <Ingredient
                    item={item}
                    key={index}
                    index={index}
                    getIngredient={getIngredient}
                    removeIngredient={removeIngredient}
                    selected={selectedRecipe}
                  />
                ))}
            </div>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? 'rounded-t-xl' : 'rounded-xl'
                    } flex items-center w-full bg-blue-400 h-11`}
                  >
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-blue-900 ml-1`}
                    />
                    <div className="flex items-center justify-between w-full gap-3 p-2">
                      <span>Recipe Details</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500 bg-white rounded-b-xl">
                    <div className="mb-2">
                      <h3>Servings: 1</h3>
                      <hr />
                      <div className="mt-2">
                        <p>Quantity: {selectedRecipe?.qty ?? 0}g</p>
                        <p>Nutrition Facts:</p>
                        <ul className="ml-6 list-disc">
                          <li>
                            Calories:{' '}
                            {selectedRecipe?.nutriments?.calories ?? 0}g
                          </li>
                          <li>
                            Fat: {selectedRecipe?.nutriments?.fat ?? 0}g
                            <ul className="ml-6 list-disc">
                              <li>
                                Saturated fat:{' '}
                                {selectedRecipe?.nutriments?.saturated_fat ?? 0}
                                g
                              </li>
                            </ul>
                          </li>
                          <li>
                            Carbohydrates:{' '}
                            {selectedRecipe?.nutriments?.carbohydrates ?? 0}g
                            <ul className="ml-6 list-disc">
                              <li>
                                Sugars:{' '}
                                {selectedRecipe?.nutriments?.sugars ?? 0}g
                              </li>
                            </ul>
                          </li>
                          <li>
                            Proteins:{' '}
                            {selectedRecipe?.nutriments?.proteins ?? 0}g
                          </li>
                          <li>
                            Salt: {selectedRecipe?.nutriments?.salt ?? 0}g
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="p-2 font-semibold tracking-widest text-white bg-orange-500 rounded-2xl hover:bg-orange-400 active:bg-orange-600"
            // onClick={(e) => createNewRecipe(e)}
          >
            {selectedRecipe?.id ? 'Update' : 'Save'}
          </button>
        </div>
      </form>

      <button
        className="p-2 mt-2 font-semibold tracking-widest bg-blue-300 rounded-2xl hover:bg-blue-200 active:bg-blue-400"
        onClick={CloseAndDiscard}
      >
        Discard my changes
      </button>
    </div>
  );
}

export default CreateRecipe;
