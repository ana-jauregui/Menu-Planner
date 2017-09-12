import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainerContainer from '../../containers/MainContainerContainer';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import FullDetailDisplay from '../FullDetailDisplay/FullDetailDisplay';
import './Main.css'


export class Main extends Component {

  render() {
    if (this.props.recipeSearchData.isSearchComplete) {
      return(
        <div className='recipe-search-display-container'>
          <RecipeSearchDisplay />
        </div>
      )
    }

    if(this.props.recipeDetailData.isSearchComplete === false && this.props.recipeDetailData.recipeDetailRequested === true) {

      return(
        <div className='recipe-search-display-container'>
          <FullDetailDisplay />
        </div>
      )
    }

    return(
      <div className='recipe-search-display-container'></div>
    )
  }
}

export default MainContainerContainer(Main);
