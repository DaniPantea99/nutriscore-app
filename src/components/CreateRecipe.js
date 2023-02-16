import React from 'react';
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

function CreateRecipe({ CloseAndDiscard, recipe, setRecipe }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('ro-RO', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const getRecipeName = (e) => {
    setRecipe({
      ...recipe,
      recipeName: e.target.value,
    });
  };

  const getIngredient = (e, ingredient) => {
    recipe?.recipeIngredients.forEach((el) => {
      if (el.id === ingredient.id) {
        el.quantity = Number(e.value);
        el.calories_currQty =
          Number(((el?.calories_100 ?? 0) / 100) * e.value) ?? 0;
      }
    });
  };

  const removeIngredient = (e, item) => {
    e.stopPropagation();
    const filterList = recipe?.recipeIngredients.filter(
      (el) => el.id !== item.id
    );
    setRecipe({
      ...recipe,
      recipeIngredients: filterList,
    });
  };

  const AddNewIngredient = (ingredient) => {
    let uuid = uuidv4();
    setRecipe({
      ...recipe,
      recipeIngredients:
      [ 
        { 
          id: uuid,
          productName: ingredient.product_name,
          brand: ingredient.brands,
          quantity: null,
          calories_100: ingredient.calories,
          calories_currQty: null,
          nutriments: ingredient.nutriments,
          additives: ingredient.additives_tags,
          source: ingredient.sursa,
        },
      ],
    });
    // setListOfIngredients((prev) => [
    //   ...prev,
    //   { id: uuid,
    //     productName: ingredient.product_name,
    //     ...etc }]);
  };

  function createNewRecipe(e) {
    e.preventDefault();
    let uuid = uuidv4();
    if (recipe.recipeIngredients.length === 0) {
      alert('No ingredients selected.');
    } else {
      setRecipe({
        ...recipe,
        id: uuid,
        recipeQuantity: recipe.recipeIngredients.reduce(
          (acc, curr) => acc + curr?.quantity ?? 0,
          0
        ),
        date: formattedDate,
        recipeNutriments: {
          calories: recipe.recipeIngredients.reduce(
            (acc, curr) => format2Decimals(acc + (curr?.calories_currQty ?? 0)),
            // (acc, curr) => format2Decimals(acc + (curr?.calories_100 ?? 0)),
            0
          ),
          fat: format2Decimals(CalculateQty('fat')),
          saturated_fat: format2Decimals(CalculateQty('saturated-fat')),
          carbohydrates: format2Decimals(CalculateQty('carbohydrates')),
          sugars: format2Decimals(CalculateQty('sugars')),
          proteins: format2Decimals(CalculateQty('proteins')),
          salt: format2Decimals(CalculateQty('salt')),
        },
        recipeAdditives: CalculateAdditives(),
        recipeNutriscore: nutriScore.calculateClass({
          energy: format2Decimals(CalculateQty('energy-kcal') * 4.184),
          fibers: format2Decimals(CalculateQty('fibers') ?? 0),
          fruit_percentage: 0,
          proteins: format2Decimals(CalculateQty('proteins')),
          saturated_fats: format2Decimals(CalculateQty('saturated-fat')),
          sodium: format2Decimals(CalculateQty('salt') * 400),
          sugar: format2Decimals(CalculateQty('sugars')),
        }),
      });

      // const recipe = {
      //   id: uuid,
      //   recipeName: '',
      //   recipeQuantity: listOfIngredients.reduce(
      //     (acc, curr) => acc + curr?.quantity ?? 0,
      //     0
      //   ),
      //   date: formattedDate,
      //   recipeIngredients: [...listOfIngredients],
      //   recipeNutriments: {
      //     calories: listOfIngredients.reduce(
      //       (acc, curr) => format2Decimals(acc + (curr?.calories_currQty ?? 0)),
      //       // (acc, curr) => format2Decimals(acc + (curr?.calories_100 ?? 0)),
      //       0
      //     ),
      //     fat: format2Decimals(CalculateQty('fat')),
      //     saturated_fat: format2Decimals(CalculateQty('saturated-fat')),
      //     carbohydrates: format2Decimals(CalculateQty('carbohydrates')),
      //     sugars: format2Decimals(CalculateQty('sugars')),
      //     proteins: format2Decimals(CalculateQty('proteins')),
      //     salt: format2Decimals(CalculateQty('salt')),
      //   },
      //   recipeAdditives: CalculateAdditives(),
      //   recipeNutriscore: nutriScore.calculateClass({
      //     energy: format2Decimals(CalculateQty('energy-kcal') * 4.184),
      //     fibers: format2Decimals(CalculateQty('fibers') ?? 0),
      //     fruit_percentage: 0,
      //     proteins: format2Decimals(CalculateQty('proteins')),
      //     saturated_fats: format2Decimals(CalculateQty('saturated-fat')),
      //     sodium: format2Decimals(CalculateQty('salt') * 400),
      //     sugar: format2Decimals(CalculateQty('sugars')),
      //   }),
      //   recipeNutriscore_TEMPORARY: {
      //     energy: format2Decimals(CalculateQty('energy-kcal') * 4.184),
      //     fibers: format2Decimals(CalculateQty('fibers') ?? 0),
      //     fruit_percentage: 0,
      //     proteins: format2Decimals(CalculateQty('proteins')),
      //     saturated_fats: format2Decimals(CalculateQty('saturated-fat')),
      //     sodium: format2Decimals(CalculateQty('salt') * 400),
      //     sugar: format2Decimals(CalculateQty('sugars')),
      //   },
      // };
      if (recipe?.id) {
        dispatch(updateRecipe(recipe));
      } else {
        dispatch(createRecipe(recipe));
      }
      CloseAndDiscard();
    }
  }

  function CalculateAdditives() {
    const additivesList = [];
    recipe.recipeIngredients
      .filter((el) => el.additives)
      .map((item) =>
        item.additives.map((elem) =>
          additivesList.push(elem.toString().slice(3) + ' ')
        )
      );
    return Array.from(new Set(additivesList));
  }

  function CalculateQty(nutrimentName = '') {
    return recipe.recipeIngredients
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
              ?.quantity_100 ?? 0) ?? 0
        );
      }, 0);
  }

  const ShowNutriScore = () => {
    const score = recipe.recipeNutriscore;
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

  return (
    <div className="flex flex-col h-full p-4 text-gray-900 bg-gray-100 shadow-2xl md:px-7">
      <button onClick={() => console.log(recipe)}>TEST</button>
      <div className="flex justify-between gap-3">
        <h2 className="text-base font-semibold">
          {t('editRecipe.description')}
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
              {t('editRecipe.firstLabel')}
            </label>
            <input
              required
              defaultValue={recipe.recipeName}
              className="w-full h-12 p-3 mb-6 text-base bg-white recipe-name rounded-xl placeholder:text-gray-400 focus:outline-none"
              placeholder={t('editRecipe.placeholder')}
              type="text"
              id="recipe-name"
              name="recipe-name"
              onChange={getRecipeName}
            />

            <label
              htmlFor="search-ingredients"
              className="block mb-1 ml-2 font-semibold tracking-wider text-gray-900 uppercase"
            >
              {t('editRecipe.secondLabel')}
            </label>
            <SearchItem
              AddNewIngredient={AddNewIngredient}
            />
          </div>

          <div className="flex flex-col mt-6 list-of-ingredients rounded-xl min-w-fit">
            {recipe.recipeIngredients?.length > 0 && (
              <h3>{t('editRecipe.ingredientsList')}</h3>
            )}
            <div className="flex flex-col gap-2 mb-6">
              {
              // recipe.recipeIngredients?.length > 0 &&
                recipe?.recipeIngredients?.map((item, index) => (
                  <Ingredient
                    item={item}
                    key={index}
                    index={index}
                    getIngredient={getIngredient}
                    removeIngredient={removeIngredient}
                  />
                ))}
            </div>

            <RecipeDetails recipe={recipe} />
          </div>

          <div className="my-4">{ShowNutriScore()}</div>
        </div>

        <div className="flex flex-col mt-4">
          <button
            type="submit"
            className="px-4 py-2 font-semibold tracking-widest text-white bg-orange-500 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
          >
            {recipe?.id
              ? t('editRecipe.updateButton')
              : t('createRecipe.saveBtn')}
          </button>
        </div>
      </form>

      <button
        className="px-4 py-2 mt-2 font-medium tracking-widest bg-blue-300 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
        onClick={CloseAndDiscard}
      >
        {recipe?.id
          ? t('editRecipe.discardButton')
          : t('createRecipe.discardBtn')}
      </button>
    </div>
  );
}

export default CreateRecipe;
