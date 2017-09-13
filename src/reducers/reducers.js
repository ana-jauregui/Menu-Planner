const initialRecipeSearchState = {
  recipeSearchData: null,
  isSearchComplete: false,
  isLoading: true
}

export const recipeSearchSuccess = (state = initialRecipeSearchState, action) => {
  switch(action.type) {
    case 'RECIPE_SEARCH_SUCCESS':
      return {
        ...action.recipeSearchData,
        isSearchComplete: true,
        isLoading: false
      }

    default:
      return state
    }
}

const initialRecipeDetailState ={
  recipeDetailData: null,
  recipeDetailRequested: false,
  isSearchComplete: true
}

export const recipeSelectDetailSuccess = (state = initialRecipeDetailState, action) => {
  switch(action.type) {
    case 'RECIPE_SELECT_DETAIL_SUCCESS':
      return {
        ...action.recipeDetailData,
        recipeDetailRequested: true,
        isSearchComplete: false
      }

      default:
        return state
  }
}
