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
            title: "Manage Recipes",
            header: {
              name: "Name",
              qty: "Quantity (grams)",
              date: "Date",
              action: "Action",
            },
            createButton: "Create New Recipe",
            searchInput: "Search",
          },
          recipesOption: {
            button: "Options",
            editOption: "Edit",
            deleteOption: "Delete",
          },
          editRecipe: {
            description:
              "To create a new recipe, please type in all the information below.",
            firstLabel: "Recipe Name",
            secondLabel: "Search Ingredients",
            ingredientsList: "List of Ingredients:",
            details: "Recipe Details",
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
