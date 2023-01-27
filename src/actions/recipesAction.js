import axios from "axios";
import {InfoConsRecipesURL} from "../api.js";

const loadRecipes = () => async (dispatch) => {
    const allRecipes = await axios.get(InfoConsRecipesURL)
    dispatch({
        type: 'FETCH_RECIPES',
        payload: {
            allRecipes: allRecipes.data,
        }
    })
}

const createRecipe = (recipe) => async (dispatch) => {
    const createdRecipe = await axios.post(InfoConsRecipesURL, recipe);
    dispatch({
        type: "CREATE_RECIPE",
        payload: {
            recipe: createdRecipe.data,
        }
    })
    dispatch({
        type: "FILTER_RECIPE",
        payload: {
            state: ""
        }
    })
}

export {loadRecipes, createRecipe}