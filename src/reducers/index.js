import { combineReducers } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsReducer";
import listOfIngredientsReducer from "./listOfIngredientsReducer";

const rootReducer = combineReducers({ingredients: ingredientsReducer, list: listOfIngredientsReducer})

export default rootReducer;