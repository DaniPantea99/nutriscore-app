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
            allRecipes: createdRecipe.data,
        }
    })
    dispatch({
        type: "FILTER_RECIPE",
        payload: {
            state: ""
        }
    })
}

const updateRecipe = (recipe) => async (dispatch) => {

    dispatch({
        type: "UPDATE_RECIPE",
        payload: {
            state: ""
        }
    })
}

const selectRecipe = (recipe) => async (dispatch) => {
    dispatch({
        type: "SELECT_RECIPE",
        payload: {
            selected: recipe,
        }
    })

}


export {loadRecipes, createRecipe, selectRecipe, updateRecipe}