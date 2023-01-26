import axios from "axios";
import InfoConsIngredientsURL from "../api.js";

const addIngredient = () => async (dispatch) => {
    const addIngredient = await axios.post(InfoConsIngredientsURL)

    dispatch({
        type: 'CREATE_LIST',
        payload: {
            listOfIngredients: addIngredient,
        }
    })
}

export {addIngredient}