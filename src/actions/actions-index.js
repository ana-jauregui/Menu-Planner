export const recipeSearchSuccess = (recipes, bool) => {
  return {
    type: 'RECIPE_SEARCH_SUCCESS',
    recipeSearchData: recipes,
    isSearchComplete: bool
  }
}

export const fetchRecipeSearch = (url, dispatch) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(recipeSearchSuccess(data))
    })
    .catch(error => console.log(error))
}


// export const fetchRecipeSearch = (url) => {
//   return(dispatch) => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       dispatch(recipeSearchSuccess(data))
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//   }
// }
