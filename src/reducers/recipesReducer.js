const initState= {
    allRecipes: [],
    filteredRecipes: [],
    selected: [],
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
        };
      case "SELECT_RECIPE":
        return {
          ...state,
          selected: action.payload.selected,
        }
      case "UPDATE_RECIPE":
        return {
          ...state,
        }
        default:
            return { ...state }
  }
}

export default recipesReducer