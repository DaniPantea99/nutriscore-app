import React, { useState } from 'react';
import SearchItem from './SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import Ingredient from '../components/Ingredient';
import { createRecipe, updateRecipe } from '../actions/recipesAction';
import { selectRecipe } from '../actions/recipesAction';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { BsFillXCircleFill } from 'react-icons/bs';
import { nutriScore } from 'nutri-score';

function CreateRecipe({ toggleSidePanel }) {
  const { filtered } = useSelector((state) => state.ingredients);
  const { selectedRecipe } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [listOfIngredients, setListOfIngredients] = useState(initList);
  const [recipeName, setRecipeName] = useState();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('ro-RO', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  function format2Decimals(str) {
    const num = parseFloat(str);
    return Math.round(num * 100) / 100;
  }

  const getIngredient = (e) => {
    listOfIngredients.forEach((el) => {
      if (el.productName === e.name) {
        el.quantity = Number(e.value);
      }
      el.calories_currQty =
        Number(((el?.calories_100 ?? 0) / 100) * e.value) ?? 0;
    });
  };

  const removeIngredient = (e, item) => {
    e.stopPropagation();
    const filterList = listOfIngredients.filter(
      (el) => el.productName !== item.productName
    );
    setListOfIngredients(filterList);
  };

  function CloseAndDiscard() {
    toggleSidePanel();
    dispatch(selectRecipe([]));
  }

  function initList() {
    if (Object.keys(selectedRecipe).length === 0) {
      return [];
    } else {
      return selectedRecipe.recipeIngredients;
    }
  }

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
        additives: ingredient.additives_tags,
        source: ingredient.sursa,
      },
    ]);
  };

  function createNewRecipe(e) {
    e.preventDefault();
    if (listOfIngredients.length === 0) {
      alert('No ingredients selected.');
    } else {
      const recipe = {
        recipeName: recipeName,
        recipeQuantity: listOfIngredients.reduce(
          (acc, curr) => acc + curr?.quantity ?? 0,
          0
        ),
        date: formattedDate,
        recipeIngredients: [...listOfIngredients],
        recipeNutriments: {
          calories: listOfIngredients.reduce(
            (acc, curr) => format2Decimals(acc + (curr?.calories_currQty ?? 0)),
            0
          ),
          fat: format2Decimals(CalculateQty('fat')),
          saturated_fat: format2Decimals(CalculateQty('saturated-fat')),
          carbohydrates: format2Decimals(CalculateQty('carbohydrates')),
          sugars: format2Decimals(CalculateQty('sugars')),
          proteins: format2Decimals(CalculateQty('proteins')),
          salt: format2Decimals(CalculateQty('salt')),
        },
        recipeNutriscore: nutriScore.calculateClass({
          energy: format2Decimals(CalculateQty('energy-kcal') * 4.184),
          fibers: format2Decimals(CalculateQty('fibers')),
          fruit_percentage: 0,
          proteins: format2Decimals(CalculateQty('proteins')),
          saturated_fats: format2Decimals(CalculateQty('saturated-fat')),
          sodium: format2Decimals(CalculateQty('salt') * 400),
          sugar: format2Decimals(CalculateQty('sugars')),
        }),
        recipeNutriscore_TEMPORARY: {
          energy: format2Decimals(CalculateQty('energy-kcal') * 4.184),
          fibers: format2Decimals(CalculateQty('fibers') ?? 0),
          fruit_percentage: 0,
          proteins: format2Decimals(CalculateQty('proteins')),
          saturated_fats: format2Decimals(CalculateQty('saturated-fat')),
          sodium: format2Decimals(CalculateQty('salt') * 400),
          sugar: format2Decimals(CalculateQty('sugars')),
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

  function CalculateQty(nutrimentName = '') {
    return listOfIngredients
      .filter((item) => item.nutriments)
      .map((element) => {
        if (!Array.isArray(element.nutriments)) {
          return Object.values(element.nutriments);
        }
        return element.nutriments;
      })
      .reduce((acc, curr) => {
        return (
          acc +
            curr.find((nutriment) => nutriment.name === nutrimentName)
              ?.quantity_100 ?? 0
        );
      }, 0);
  }

  function ShowNutriScore() {
    const score = selectedRecipe.recipeNutriscore;
    if (!score) {
      return (
        <img
          width="100px"
          src={`./images/nutriscore/nutriscore.svg`}
          alt={`logo-nutriscore`}
        />
      );
    }
    return (
      <img
        width="100px"
        src={`./images/nutriscore/nutriscore_${score.toLowerCase()}.svg`}
        alt={`logo-nutriscore-${score.toLowerCase()}`}
      />
    );
  }

  const NutritionFacts = () => {
    return (
      <div>
        <p>Nutrition Facts (per 1 recipe):</p>
        <ul className="ml-6 list-disc">
          <li>
            Calories:&nbsp;
            {selectedRecipe?.recipeNutriments?.calories ?? 0} kcal /&nbsp;
            {format2Decimals(
              (selectedRecipe?.recipeNutriments?.calories ?? 0) * 4.184
            )}{' '}
            kJ
          </li>
          <li>
            Fat:&nbsp;{selectedRecipe?.recipeNutriments?.fat ?? 0}
            <ul className="ml-6 list-disc">
              <li>
                Saturated fat:&nbsp;
                {selectedRecipe?.recipeNutriments?.saturated_fat ?? 0}
              </li>
            </ul>
          </li>
          <li>
            Carbohydrates:{' '}
            {selectedRecipe?.recipeNutriments?.carbohydrates ?? 0}
            <ul className="ml-6 list-disc">
              <li>Sugars: {selectedRecipe?.recipeNutriments?.sugars ?? 0}</li>
            </ul>
          </li>
          <li>Proteins: {selectedRecipe?.recipeNutriments?.proteins ?? 0}</li>
          <li>Salt: {selectedRecipe?.recipeNutriments?.salt ?? 0}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full p-4 text-gray-900 bg-gray-100 shadow-2xl md:px-7">
      {/* <button onClick={CalculateQty}>test</button> */}
      <div className="flex justify-between gap-3">
        <h2 className="text-base font-semibold">
          To create a new recipe, please type in all the information below.
        </h2>
        <BsFillXCircleFill
          onClick={CloseAndDiscard}
          className="text-4xl text-blue-900 cursor-pointer blue-900 hover:text-opacity-70 active:text-opacity-100"
        />
      </div>
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
              className="w-full h-12 p-3 mb-6 text-base bg-white recipe-name rounded-xl placeholder:text-gray-600 focus:outline-none"
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
                    } flex items-center w-full bg-blue-400 h-11 hover:bg-opacity-70 outline-none`}
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
                        <p>
                          Quantity:&nbsp;{selectedRecipe?.recipeQuantity ?? 0}g
                        </p>

                        <NutritionFacts />
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="my-4">{ShowNutriScore()}</div>
        </div>

        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="p-2 font-semibold tracking-widest text-white bg-orange-500 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
          >
            {selectedRecipe?.id ? 'Update' : 'Save'}
          </button>
        </div>
      </form>

      <button
        className="p-2 mt-2 font-semibold tracking-widest bg-blue-300 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
        onClick={CloseAndDiscard}
      >
        {selectedRecipe?.id ? 'Discard my changes' : 'Discard and close'}
      </button>
    </div>
  );
}

export default CreateRecipe;
