import React, { Component } from 'react';
import { Route } from 'react-router';
import MainContainerContainer from '../../containers/MainContainerContainer';
import Header from '../Header/Header';
import SearchControl from '../Controls/SearchControl';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import RecipeDetailDisplay from '../RecipeDetailDisplay/RecipeDetailDisplay';
import './Main.css'


export class Main extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('SCU',nextProps, nextState);
  //   return nextProps.recipeSearchData !== null
  // }

  render() {
// console.log('main',this.props);

    if(this.props.recipeSearchData.isSearchComplete || this.props.recipeSearchData.isLoading === false) {
      const recipeSearchResults = this.props.recipeSearchData.matches

      const results = recipeSearchResults.map((recipe, i) => {

        return(
          <RecipeSearchDisplay key={ i } recipeId={recipe.id} recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
        )
      })

      return(
        <div className='recipe-search-display-container'>
          { results }
        </div>
      )
    }

    return(
      <div>
        {/* <Route exact path='/recipe-search' component={RecipeSearchDisplay} /> */}
        {/* <Route exact path='/:recipeId' component={RecipeDetailDisplay} /> */}
      </div>
    )

  }
}

export default MainContainerContainer(Main);
