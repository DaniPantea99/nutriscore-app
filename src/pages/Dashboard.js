import React, { useState, Fragment, useCallback } from "react";
import CreateRecipe from "../components/CreateRecipe";
import { Transition } from "@headlessui/react";
import RecipesTable from "../components/RecipesTable";
import logo from "../images/mrbeast-logo-portrait.svg";
import { removeRecipe } from "../actions/recipesAction";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";

// const lngs = {
//   en: { nativeName: "English" },
//   ro: { nativeName: "Romanian" },
// };

function Dashboard() {
  const [showRecipePanel, setShowRecipePanel] = useState(false);
  const toggleSidePanel = useCallback(() => {
    setShowRecipePanel(!showRecipePanel);
  }, [showRecipePanel]);

  const { filteredRecipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const RemoveRecipe = useCallback(
    (e) => {
      const recipe = filteredRecipes.find((el) => el.recipeName === e);
      dispatch(removeRecipe(recipe));
    },
    [dispatch, filteredRecipes]
  );

  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex items-center gap-4 mb-16">
        <img width="50px" src={logo} alt="logo" />
        <Trans i18nKey="pageTitle">
          <h1 className="tracking-wide uppercase cursor-default">
            mr beast burger
          </h1>
        </Trans>
      </div>

      <div className="flex flex-col p-8 bg-white rounded-xl min-h-[500px] z-0">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="tracking-wide">{t("recipeList.title")}</h2>
          </div>
          <button
            className="px-4 py-3 font-bold text-white bg-orange-500 rounded-2xl hover:bg-orange-400"
            onClick={toggleSidePanel}
          >
            {t("recipeList.createButton")}
          </button>
        </div>

        <RecipesTable
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
          <CreateRecipe toggleSidePanel={toggleSidePanel} />
        </div>
      </Transition>
    </div>
  );
}

export default Dashboard;
