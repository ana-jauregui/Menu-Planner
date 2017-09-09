import { connect } from 'react-redux';
// import MainContainer from '../components/MainContainer/MainContainer';
import { fetchRecipeSearch } from '../actions/actions-index';

const mapStateToProps = (state) => {
  return {
    recipeSearchData: state.recipeSearchSuccess
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchInitialRecipes: (url) =>
    fetchRecipeSearch(url, dispatch)
})

// const mapDispatchToProps = (dispatch) => ({
//   fetchInitialRecipes: (url) => dispatch(fetchRecipeSearch(url))
// })

export default connect(mapStateToProps, mapDispatchToProps)
