import React, { Component } from 'react';
import MainContainerContainer from '../../containers/MainContainerContainer';
import './RecipeSearchDisplay.css';

export class RecipeSearchDisplay extends Component {
  constructor(){
    super();
  }

  viewRecipeDetail(recipeId) {
    this.props.fetchRecipeSearchDetail(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  render() {
    console.log('recipeSearchDisplay', this.props);
    const { recipeId ,recipeName, image, time, rating } = this.props
    return(
      <div onClick={() => this.viewRecipeDetail(recipeId)}>
        <p>{ recipeName }</p>
        <img src={ image }/>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Cook Time: ${time/60} min`}</p>
      </div>
    )
  }
}

export default MainContainerContainer(RecipeSearchDisplay);
