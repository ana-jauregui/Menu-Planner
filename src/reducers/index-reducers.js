import { combineReducers } from 'redux';
import { recipeSearchSuccess, recipeSelectDetailSuccess } from './reducers';

const rootReducer = combineReducers({
  recipeSearchSuccess,
  recipeSelectDetailSuccess
  // recipeSearchOrDetail
})

export default rootReducer
