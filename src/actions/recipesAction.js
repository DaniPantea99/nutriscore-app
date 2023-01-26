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

export {loadRecipes}