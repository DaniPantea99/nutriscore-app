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
        }
        default:
            return { ...state }
  }
}

export default recipesReducer