import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          recipeList: {
            title: "Mr Beast Burger",
            subtitle: "Manage Recipes",
            header: {
              name: "Name",
              qty: "Quantity (grams)",
              cal: "Calories",
              ntrs: "Nutriscore",
              date: "Date",
              action: "Action",
            },
            createButton: "Create New Recipe",
            searchInput: "Search",
          },
          recipesOption: {
            openBtn: "Open",
            removeBtn: "Remove",
          },
          createRecipe: {
            saveBtn: "Save",
            discardBtn: "Discard and close",
          },
          editRecipe: {
            description:
              "To create a new recipe, please type in all the information below.",
            firstLabel: "Recipe Name",
            placeholder: "Recipe Name...",
            secondLabel: "Search Ingredients",
            placeholderSecond: "Search...",
            nothingFound: "Nothing found",
            ingredientsList: "List of Ingredients:",
            details: {
              title: "Recipe Details",
              servings: "Servings",
              qty: "Quantity",
              nutrition: "Nutrition Facts(per 1 recipe)",
            },

            updateButton: "Update",
            discardButton: "Discard my changes",
          },
        },
      },
      ro: {
        title: "Gestionare Rețete",
      },
    },
  });
