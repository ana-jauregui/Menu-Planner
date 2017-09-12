import React, { Component } from 'react';
import { Route } from 'react-router';
import MainContainerContainer from '../../containers/MainContainerContainer';
import Header from '../Header/Header';
import SearchControl from '../Controls/SearchControl';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import RecipeDetailDisplay from '../RecipeDetailDisplay/RecipeDetailDisplay';
import './Main.css'


export class Main extends Component {
  constructor() {
    super();

    this.state = {
      isloading: false
    }
  }

  // componentDidMount() {
  //
  // }

  shouldComponentUpdate(nextState, nextProps) {
    console.log('shouldComponentUpdate', nextState, nextProps);
    return nextProps.recipeSearchData !== this.props.recipeSearchData
  }

  render() {
console.log('Main', this.props);

const simpleDisplay = (
  <div>
    <Header />
    <SearchControl />
    I AM THE MAIN CONTAINER
  </div>
)

// const recipeSearchResults = this.props.recipeSearchData.matches
//
// const results = recipeSearchResults.map((recipe, i) => {
//
//   return <RecipeSearchDisplay key={ i } recipeId={recipe.id} recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
// })

const recipeSearch = (
  <div className='recipe-search-display-container'>
     <Header />
     <SearchControl />
    Stuff
   </div>
)

return(
  <div>
    {this.props.recipeSearchData ? simpleDisplay : recipeSearch }
  </div>
)

    // const recipeSearchResults = this.props.recipeSearchData.matches
    //
    // const results = recipeSearchResults.map((recipe, i) => {
    //
    //   return <RecipeSearchDisplay key={ i } recipeId={recipe.id} recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
    // })
    //
    // if(this.props.recipeSearchData.isSearchComplete) {
    // }
    //
    // return(
    //   <div className='recipe-search-display-container'>
    //     <Header />
    //     <SearchControl />
    //     { results }
    //   </div>
    // )

  // return(
  //   <div>
  //     <Header />
  //     <SearchControl />
  //     THIS IS THE MAIN CONTAINER
  //     <Route path='/recipe-search' component={RecipeSearchDisplay} />
  //     <Route path='/recipe-details' component={RecipeDetailDisplay} />
  //   </div>
  // )

  }
}

export default MainContainerContainer(Main);
