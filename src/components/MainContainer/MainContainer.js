import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainerContainer from '../../containers/MainContainerContainer';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import './MainContainer.css'


export class MainContainer extends Component {

  render() {
    const recipeSearchResults = this.props.recipeSearchData.recipeSearchData.matches

    const results = recipeSearchResults.map((recipe, i) => {

      return <RecipeSearchDisplay key={ i } recipeId={recipe.id} recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
    })

    if(this.props.recipeSearchData.isSearchComplete) {
      <Redirect to='/recipe-search' />
    }

    return(
      <div className='recipe-search-display-container'>
        { results }
      </div>
    )
  }
}

export default MainContainerContainer(MainContainer);
