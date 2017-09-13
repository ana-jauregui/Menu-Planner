import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchRecipeSearch, fetchRecipeDetail } from '../actions/actions-index';

const mapStateToProps = (state) => {
  return {
    recipeSearchData: state.recipeSearchSuccess,
    recipeDetailData: state.recipeSelectDetailSuccess
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchInitialRecipes: (url) =>
    fetchRecipeSearch(url, dispatch),

  fetchRecipeSearchDetail: (url) =>
    fetchRecipeDetail(url, dispatch),

  changeRoute: (url) => {
    dispatch(push(url))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
