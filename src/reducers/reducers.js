const initialState = {
  recipeSearchData: {},
  isSearchComplete: false
}

export const recipeSearchSuccess = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIPE_SEARCH_SUCCESS':
      return Object.assign({}, state, {recipeSearchData: action.recipeSearchData, isSearchComplete: true})

    default:
      return state
    }
}
