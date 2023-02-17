import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';
import { format2Decimals } from '../utility';


function RecipeDetails({recipe}) {
  const { t } = useTranslation();
  const IngredientsTable = () => {
    return (
      <table className="w-full my-4">
        <thead>
          <tr className="font-medium border-b border-gray-300">
            <td>{t('editRecipe.details.table.column1')}</td>
            <td>{t('editRecipe.details.table.column2')}</td>
          </tr>
        </thead>
        <tbody>
          {recipe?.recipeIngredients?.map((item, index) => (
            <tr key={index}>
              <td className="first-letter:uppercase">{item.productName}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold">
            <td>{t('editRecipe.details.totalQuantity')}</td>
            <td>{recipe?.recipeQuantity ?? 0}</td>
          </tr>
        </tfoot>
      </table>
    );
  };

  const NutritionFacts = () => {
    return (
      <div>
        <p className="font-semibold">{t('editRecipe.details.nutrition')}:</p>
        <ul className="ml-6 list-disc">
          <li>
            {t('editRecipe.details.calories')}:&nbsp;
            {recipe?.recipeNutriments?.calories ?? 0} kcal /&nbsp;
            {format2Decimals(
              (recipe?.recipeNutriments?.calories ?? 0) * 4.184
            )}{' '}
            kJ
          </li>
          <li>
            {t('editRecipe.details.fat')}:&nbsp;
            {recipe?.recipeNutriments?.fat ?? 0}
            <ul className="ml-6 list-disc">
              <li>
                {t('editRecipe.details.saturatedFat')}:&nbsp;
                {recipe?.recipeNutriments?.saturated_fat ?? 0}
              </li>
            </ul>
          </li>
          <li>
            {t('editRecipe.details.carbohydrates')}:{' '}
            {recipe?.recipeNutriments?.carbohydrates ?? 0}
            <ul className="ml-6 list-disc">
              <li>
                {t('editRecipe.details.sugar')}:{' '}
                {recipe?.recipeNutriments?.sugars ?? 0}
              </li>
            </ul>
          </li>
          <li>
            {t('editRecipe.details.proteins')}:{' '}
            {recipe?.recipeNutriments?.proteins ?? 0}
          </li>
          <li>
            {t('editRecipe.details.salt')}:{' '}
            {recipe?.recipeNutriments?.salt ?? 0}
          </li>
        </ul>
      </div>
    );
  };

  const Additives = () => {
    return (
      <div>
        <span className="font-semibold">
          {t('editRecipe.details.additives')}:&nbsp;
        </span>
        {recipe?.recipeAdditives?.length ? (
          <ul className="ml-6 capitalize list-disc">
            <li>{recipe?.recipeAdditives.map((item) => item)}</li>
          </ul>
        ) : (
          <span>{t('editRecipe.details.noadditivesfound')}</span>
        )}
      </div>
    );
  };

  return (
    <div>
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
                <span>{t('editRecipe.details.title')}</span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500 bg-white rounded-b-xl">
              <div className="mb-2">
                <h3>
                  {t('editRecipe.details.ingredientperserving')}{' '}
                  <span className="font-bold uppercase">
                    {recipe?.recipeName
                      ? recipe.recipeName
                      : t('editRecipe.details.defaultRecipeName')}
                  </span>
                </h3>
                <IngredientsTable />
                <NutritionFacts />
                <Additives />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default RecipeDetails;
