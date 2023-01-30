const initState= {
    allRecipes: [],
    filteredRecipes: [],
}

const recipesReducer = (state=initState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES':
        return {
            ...state,
            allRecipes: action.payload.allRecipes,
            filteredRecipes: action.payload.allRecipes,
        };
      case 'CREATE_RECIPE':
        return {
          ...state,
          allRecipes: [...state.allRecipes, action.payload.allRecipes],
        };
      case 'FILTER_RECIPE':
        return {
          ...state,
          filteredRecipes: [
            ...state.allRecipes.filter((item) =>
            action.payload.state ? item.state === action.payload.state : true
            )
          ]
        }
        default:
            return { ...state }
  }
}

export default recipesReducer