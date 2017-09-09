export const recipeSearchSuccess = (recipes) => {
  return {
    type: 'RECIPE_SEARCH_SUCCESS',
    recipeSearchData: recipes
  }
}

export const fetchRecipeSearch = (url, dispatch) => {
  fetch(url)
    .then(response => response.json())
    .then(response => console.log('API call response',response))
    // .then(data => {
    //   dispatch(recipeSearchSuccess(data))
    // })
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
