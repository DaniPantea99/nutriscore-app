import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          recipeList: {
            title: 'Mr Beast Burger',
            subtitle: 'Manage Recipes',
            header: {
              name: 'Name',
              qty: 'Quantity (grams)',
              cal: 'Calories',
              ntrs: 'Nutriscore',
              date: 'Date',
              action: 'Action',
            },
            createButton: 'Create New Recipe',
            searchInput: 'Search',
          },
          recipesOption: {
            openBtn: 'Open',
            removeBtn: 'Remove',
          },
          createRecipe: {
            saveBtn: 'Save',
            discardBtn: 'Discard and close',
          },
          editRecipe: {
            description:
              'To create a new recipe, please type in all the information below.',
            firstLabel: 'Recipe Name',
            placeholder: 'Recipe Name...',
            secondLabel: 'Search Ingredients',
            placeholderSecond: 'Search...',
            nothingFound: 'Nothing found',
            ingredientsList: 'List of Ingredients:',
            details: {
              title: 'Recipe Details',
              servings: 'Servings',
              quantity: 'Quantity',
              nutrition: 'Nutrition Facts(per 1 recipe)',
              calories: 'Calories',
              fat: 'Fat',
              saturatedFat: 'Saturated fat',
              carbohydrates: 'Carbohydrates',
              sugar: 'Sugar',
              proteins: 'Proteins',
              salt: 'Salt',
            },
            updateButton: 'Update',
            discardButton: 'Discard my changes',
          },
          userPage: {
            title: 'User Page',
          },
          settingsPage: {
            title: 'Settings Page',
            translateButton: 'Translate',
            language: 'Language',
          },
        },
      },
      ro: {
        translation: {
          recipeList: {
            title: 'Mr Beast Burger',
            subtitle: 'Gestionare Rețete',
            header: {
              name: 'Nume',
              qty: 'Cantitate (grame)',
              cal: 'Calorii',
              ntrs: 'Nutriscore',
              date: 'Data',
              action: 'Acțiune',
            },
            createButton: 'Creare Rețetă Nouă',
            searchInput: 'Căutare',
          },
          recipesOption: {
            openBtn: 'Deschide',
            removeBtn: 'Șterge',
          },
          createRecipe: {
            saveBtn: 'Salvează',
            discardBtn: 'Renunță și închide',
          },
          editRecipe: {
            description:
              'Pentru a crea o rețetă nouă, vă rugăm să introduceți toate informațiile de mai jos.',
            firstLabel: 'Nume Rețetă',
            placeholder: 'Nume...',
            secondLabel: 'Căutare Ingrediente',
            placeholderSecond: 'Caută...',
            nothingFound: 'Niciun ingredient găsit',
            ingredientsList: 'Lista de Ingrediente:',
            details: {
              title: 'Detalii Rețetă',
              servings: 'Porții',
              quantity: 'Cantitate',
              nutrition: 'Informații nutriționale (pentru 1 rețetă)',
              calories: 'Calorii',
              fat: 'Grăsimi',
              saturatedFat: 'Grăsimi saturate',
              carbohydrates: 'Carbohidrați',
              sugar: 'Zaharuri',
              proteins: 'Proteine',
              salt: 'Sare',
            },
            updateButton: 'Actualizare',
            discardButton: 'Renunțare la modificări',
          },
          userPage: {
            title: 'User Page',
          },
          settingsPage: {
            title: 'Settings Page',
            translateButton: 'Translate',
            language: 'Limbă',
          },
        },
      },
    },
  });

export default i18n;
