import axios from 'axios';
import { InfoConsRecipesURL } from '../api.js';

const loadRecipes = () => async (dispatch) => {
  const allRecipes = await axios.get(InfoConsRecipesURL);
  dispatch({
    type: 'FETCH_RECIPES',
    payload: {
      allRecipes: allRecipes.data,
    },
  });
};

const createRecipe = (recipe) => async (dispatch) => {
  const createdRecipe = await axios.post(InfoConsRecipesURL, recipe);
  dispatch({
    type: 'CREATE_RECIPE',
    payload: {
      allRecipes: createdRecipe.data,
    },
  });
  dispatch({
    type: 'FILTER_RECIPE',
    payload: {
      state: '',
    },
  });
};

const updateRecipe = (recipe) => async (dispatch) => {
  dispatch({
    type: 'UPDATE_RECIPE',
    payload: {
      selected: recipe,
    },
  });
  dispatch({
    type: 'FILTER_RECIPE',
    payload: {
      state: '',
    },
  });
};

const removeRecipe = (recipe) => async (dispatch) => {
  const allRecipes = await axios.get(InfoConsRecipesURL);
  const filtered = allRecipes.data.filter(
    (element) => element.id !== recipe.id
  );
  await axios.delete(InfoConsRecipesURL + `/${recipe.id}`);
  dispatch({
    type: 'REMOVE_RECIPE',
    payload: {
      recipe: filtered,
    },
  });
  dispatch({
    type: 'FILTER_RECIPE',
    payload: {
      state: '',
    },
  });
};

export { loadRecipes, createRecipe, updateRecipe, removeRecipe };
