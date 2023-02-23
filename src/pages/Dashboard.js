import React, { useState, Fragment, useCallback } from 'react';
import CreateRecipe from '../components/CreateRecipe';
import { Transition } from '@headlessui/react';
import RecipesTable from '../components/RecipesTable';
import { removeRecipe } from '../actions/recipesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NutriScoreInfo from '../components/NutriScoreInfo';

// const lngs = {
//   en: { nativeName: "English" },
//   ro: { nativeName: "Romanian" },
// };

function Dashboard() {
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [showRecipePanel, setShowRecipePanel] = useState(false);
  const toggleSidePanel = useCallback(() => {
    setShowRecipePanel(!showRecipePanel);
  }, [showRecipePanel]);

  const { filteredRecipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const RemoveRecipe = useCallback(
    (recipe) => {
      const selected = filteredRecipes.find((el) => el.id === recipe.id);
      dispatch(removeRecipe(selected));
    },
    [dispatch, filteredRecipes]
  );

  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex items-center justify-between h-screen">
        <div className="flex items-center gap-4">
          <img
            width="50px"
            src={`./images/mrbeast-logo2.svg`}
            alt="restaurant-logo"
          />
          <h1 className="tracking-wide uppercase cursor-default">
            {t('recipeList.title')}
          </h1>
        </div>
        <img
          onClick={openModal}
          className="w-[110px] mr-3 cursor-pointer hover:scale-105 transition-all duration-200"
          src={`./images/nutriscore/nutriscore.svg`}
          alt="nutriscore logo"
        />
        {isOpen && <NutriScoreInfo isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>

      <div className="flex flex-col p-8 bg-white rounded-xl min-h-[500px] w-[500px] sm:w-full dark:text-gray-100 dark:bg-slate-800">
        <div className="flex flex-col justify-between mb-6 sm:flex-row">
          <div>
            <h2 className="tracking-wide">{t('recipeList.subtitle')}</h2>
          </div>
          <button
            className="px-4 py-3 font-bold text-white bg-orange-500 rounded-2xl hover:bg-opacity-70 active:bg-opacity-100"
            onClick={toggleSidePanel}
          >
            {t('recipeList.createButton')}
          </button>
        </div>

        <RecipesTable
          setSelectedRecipe={setSelectedRecipe}
          toggleSidePanel={toggleSidePanel}
          RemoveRecipe={RemoveRecipe}
        />
      </div>

      <Transition
        as={Fragment}
        show={showRecipePanel}
        enter="transition-opacity duration-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`w-full lg:w-[500px]
        fixed h-full top-0 right-0 z-50 
        `}
        >
          <CreateRecipe
            selectedRecipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
            showRecipePanel={showRecipePanel}
            toggleSidePanel={toggleSidePanel}
          />
        </div>
      </Transition>
    </div>
  );
}

export default Dashboard;
