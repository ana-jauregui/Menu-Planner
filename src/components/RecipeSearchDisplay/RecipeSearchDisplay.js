import React, { Component } from 'react';
import { Route } from 'react-router';
import MainContainerContainer from '../../containers/MainContainerContainer';
// import RecipeDetailDisplay from '../RecipeDetailDisplay/RecipeDetailDisplay';
import './RecipeSearchDisplay.css';

export class RecipeSearchDisplay extends Component {
  constructor(){
    super();
  }

  viewRecipeDetail(recipeId) {
    this.props.fetchRecipeSearchDetail(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  render() {

    return(
      <div>
        THIS IS THE RECIPE SEARCH DISPLAY!!!
      </div>
    )
  //   if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === false) {
  //
  //     const { recipeId ,recipeName, image, time, rating } = this.props
  //
  //     return(
  //       <div onClick={() => this.viewRecipeDetail(recipeId)}>
  //         <p>{ recipeName }</p>
  //         <img src={ image }/>
  //         <p>{`Rating: ${rating}`}</p>
  //         <p>{`Cook Time: ${time/60} min`}</p>
  //       </div>
  //     )
  //   }
  //
  //   if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === true) {
  //
  //
  //     const { name, totalTime, numberOfServings, ingredientLines } = this.props.recipeDetailData
  //     const image = this.props.recipeDetailData.images[0].hostedLargeUrl
  //     const sourceUrl = this.props.recipeDetailData.source.sourceRecipeUrl
  //     const ingredients = ingredientLines.map((ingredient, i) => <ul key={i}><li>{ingredient}</li></ul>)
  //
  //     return(
  //       <div>{this.props.recipeId === this.props.recipeDetailData.id ? <div><div>
  //       <p>{name}</p>
  //       <img src={image} />
  //       <button onClick={() => window.open(sourceUrl)}>View Instructions</button>
  //       <p>Total Cook Time: {totalTime}</p>
  //       <p>Number of Servings: {numberOfServings}</p>
  //      </div>{ingredients}</div>: null}</div>
  //     )
  //   }
  }
}

export default MainContainerContainer(RecipeSearchDisplay);
