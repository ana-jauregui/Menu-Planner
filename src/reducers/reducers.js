export const recipeSearchSuccess = (state = {}, action) => {
  switch(action.type) {
    case 'RECIPE_SEARCH_SUCCESS':
      return action.recipeSearchData

    default:
      return state
    }
}
