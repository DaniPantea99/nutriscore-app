import axios from 'axios';
import { IngredientsURL } from '../api.js';


const loadIngredients = () => async (dispatch) => {
  const allIngredients = await axios.get(IngredientsURL);

  dispatch({
    type: 'FETCH_INGREDIENTS',
    payload: {
      all: allIngredients.data,
    },
  });
};

export { loadIngredients };
