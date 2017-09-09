import React, { Component } from 'react';
import MainContainerContainer from '../../containers/MainContainerContainer';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';

export class MainContainer extends Component {


  render() {
    console.log('mainContainer',this.props);
    const recipeSearchResults = this.props.recipeSearchData.recipeSearchData.matches

    const results = recipeSearchResults.map((recipe, i) => {
      console.log(recipe)
      return <RecipeSearchDisplay key={ i } recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
    })

        return(
          <div>
            { results }
          </div>
        )
  }
}

export default MainContainerContainer(MainContainer);
