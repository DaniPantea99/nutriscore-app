import React, { useState } from 'react';
import SearchItem from './SearchItem';
import { useDispatch } from 'react-redux';
import Ingredient from '../components/Ingredient';
import { createRecipe, updateRecipe } from '../actions/recipesAction';
import { BsFillXCircleFill } from 'react-icons/bs';
import { nutriScore } from 'nutri-score';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { format2Decimals } from '../utility';
import RecipeDetails from './RecipeDetails';

const initialState = {
  recipe: {
    id: '',
    name: '',
    quantity: null,
    date: '',
    ingredients: [],
    nutriments: {
      calories: 0,
      fat: 0,
      saturated_fat: 0,
      carbohydrates: 0,
      sugars: 0,
      proteins: 0,
      salt: 0,
    },
    additives: [],
    nutriscore: null,
  },
};

function CreateRecipe({ onCloseAndDiscard, recipe }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('ro-RO', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const [state, setState] = useState(initialState);

  const calculateIngredientQty = (value, ingredient) => {
    state.recipe?.ingredients.forEach((item) => {
      if (item.id === ingredient.id) {
        item.quantity = Number(value);
        item.calories_currQty =
          Number(((item?.calories_100 ?? 0) / 100) * value) ?? 0;
        Object.values(item.nutriments).forEach(
          (element) =>
            (element.quantity_current = Number(
              (element.quantity_100 / 100) * value
            ))
        );
      }
      calculateRecipeProperties();
    });
  };

  function removeIngredient(ingredient) {
    const filteredList = state.recipe?.ingredients.filter(
      (el) => el.id !== ingredient.id
    );
    setState({
      recipe: {
        ...state.recipe,
        ingredients: filteredList,
      },
    });
    calculateRecipeProperties();
  }

  const addNewIngredient = (ingredient) => {
    let uuid = uuidv4();
    const newIngredient = {
      id: uuid,
      productName: ingredient.product_name,
      brand: ingredient.brands,
      quantity: null,
      calories_100: ingredient.calories,
      calories_currQty: null,
      nutriments: ingredient.nutriments,
      additives: ingredient.additives_tags,
      source: ingredient.sursa,
    };
    setState({
      recipe: {
        ...state.recipe,
        ingredients: [...state.recipe.ingredients, newIngredient],
      },
    });
  };

  function calculateRecipeProperties() {
    setState({
      recipe: {
        ...state.recipe,
        quantity: state.recipe.ingredients.reduce(
          (acc, curr) => acc + curr?.quantity ?? 0,
          0
        ),
        date: formattedDate,
        nutriments: {
          calories: state.recipe.ingredients.reduce(
            (acc, curr) => format2Decimals(acc + (curr?.calories_currQty ?? 0)),
            // (acc, curr) => format2Decimals(acc + (curr?.calories_100 ?? 0)),
            0
          ),
          fat: format2Decimals(calculateQty('fat')),
          saturated_fat: format2Decimals(calculateQty('saturated-fat')),
          carbohydrates: format2Decimals(calculateQty('carbohydrates')),
          sugars: format2Decimals(calculateQty('sugars')),
          proteins: format2Decimals(calculateQty('proteins')),
          salt: format2Decimals(calculateQty('salt')),
        },
        additives: calculateAdditives(),
        nutriscore: nutriScore.calculateClass({
          energy: format2Decimals(calculateQty('energy-kcal') * 4.184),
          fibers: format2Decimals(calculateQty('fibers') ?? 0),
          fruit_percentage: 0,
          proteins: format2Decimals(calculateQty('proteins')),
          saturated_fats: format2Decimals(calculateQty('saturated-fat')),
          sodium: format2Decimals(calculateQty('salt') * 400),
          sugar: format2Decimals(calculateQty('sugars')),
        }),
      },
    });
  }

  function createNewRecipe(e) {
    e.preventDefault();
    if (state.recipe.ingredients.length === 0) {
      alert('No ingredients selected.');
    } else if (state.recipe.id) {
      dispatch(updateRecipe(state.recipe));
      onCloseAndDiscard();
    } else {
      dispatch(createRecipe(state.recipe));
      onCloseAndDiscard();
    }
  }

  function calculateAdditives() {
    const additivesList = [];
    state.recipe.ingredients
      .filter((el) => el.additives)
      .map((item) =>
        item.additives.map((elem) =>
          additivesList.push(elem.toString().slice(3) + ' ')
        )
      );
    return Array.from(new Set(additivesList));
  }

  function calculateQty(nutrimentName = '') {
    return state.recipe.ingredients
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
            (curr?.find((nutriment) => nutriment.name === nutrimentName)
              ?.quantity_current ?? 0) ?? 0
        );
      }, 0);
  }

  const showNutriScore = () => {
    const score = state.recipe.nutriscore;
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
  };

  const formHandler = (formData) => {
    setState({
      recipe: {
        ...state.recipe,
        ...formData,
      },
    });
  };

  return (
    <div className="flex flex-col h-full p-4 text-gray-900 bg-gray-100 shadow-2xl md:px-7">
      {/* <button onClick={() => console.log(state.recipe)}>TEST</button> */}
      <div className="flex justify-between gap-3">
        <h2 className="text-base font-semibold">
          {t('editRecipe.description')}
        </h2>
        <BsFillXCircleFill
          onClick={onCloseAndDiscard}
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
              {t('editRecipe.firstLabel')}
            </label>
            <input
              required
              defaultValue={state.recipe.name}
              className="w-full h-12 p-3 mb-6 text-base bg-white recipe-name rounded-xl placeholder:text-gray-400 focus:outline-none"
              placeholder={t('editRecipe.placeholder')}
              type="text"
              id="recipe-name"
              name="recipe-name"
              onChange={(e) => formHandler({ name: e.target.value })}
            />

            <label
              htmlFor="search-ingredients"
              className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
            >
              {t('editRecipe.secondLabel')}
            </label>
            <SearchItem onAddNewIngredient={addNewIngredient} />
          </div>

          <div className="flex flex-col mt-6 list-of-ingredients rounded-xl min-w-fit">
            {state.recipe.ingredients?.length > 0 && (
              <h3>{t('editRecipe.ingredientsList')}</h3>
            )}

            {state.recipe.ingredients?.length > 0 && (
              <div className="flex flex-col gap-2 mb-6">
                {state.recipe?.ingredients?.map((item, index) => (
                  <Ingredient
                    item={item}
                    key={index}
                    onChange={calculateIngredientQty}
                    onRemove={removeIngredient}
                  />
                ))}
              </div>
            )}
            <RecipeDetails recipe={state.recipe} />
          </div>

          <div className="my-4">{showNutriScore()}</div>
        </div>

        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="px-4 py-2 font-semibold tracking-widest text-white bg-orange-500 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
          >
            {state.recipe.id
              ? t('editRecipe.updateButton')
              : t('createRecipe.saveBtn')}
          </button>
        </div>
      </form>

      <button
        className="px-4 py-2 mt-2 font-medium tracking-widest bg-blue-300 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
        onClick={onCloseAndDiscard}
      >
        {state.recipe.id
          ? t('editRecipe.discardButton')
          : t('createRecipe.discardBtn')}
      </button>
    </div>
  );
}

export default CreateRecipe;
