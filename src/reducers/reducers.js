const initialRecipeSearchState = {
  recipeSearchData: {},
  isSearchComplete: false,
}

export const recipeSearchSuccess = (state = initialRecipeSearchState, action) => {
  switch(action.type) {
    case 'RECIPE_SEARCH_SUCCESS':
      return Object.assign({}, state, {recipeSearchData: action.recipeSearchData, isSearchComplete: true})

    default:
      return state
    }
}

const initialRecipeDetailState ={
  recipeDetailData: {},
  recipeDetailRequested: false,
  isSearchComplete: true
}

export const recipeSelectDetailSuccess = (state = initialRecipeDetailState, action) => {
  switch(action.type) {
    case 'RECIPE_SELECT_DETAIL_SUCCESS':
      return Object.assign({}, state, {recipeDetailData: action.recipeDetailData, recipeDetailRequested: true, isSearchComplete: false})

      default:
        return state
  }
}
