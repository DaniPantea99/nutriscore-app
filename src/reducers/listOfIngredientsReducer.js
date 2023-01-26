const initState= {
    listOfIngredients: [],
}

const listOfIngredientsReducer = (state=initState, action) => {
  switch (action.type) {
    case 'CREATE_LIST':
        return {
            ...state,
            listOfIngredients: action.payload.listOfIngredients,
        }
        default:
            return { ...state }
  }
}

export default listOfIngredientsReducer