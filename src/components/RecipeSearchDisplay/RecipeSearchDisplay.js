import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    // console.log('recipeSearchDisplay', this.props);

    if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === false) {

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

    if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === true) {
        // <Redirect to='/recipe-details'/>

      const { name, totalTime, numberOfServings } = this.props.recipeDetailData.recipeDetailData
      const image = this.props.recipeDetailData.recipeDetailData.images[0].hostedLargeUrl
      const sourceUrl = this.props.recipeDetailData.recipeDetailData.source.sourceRecipeUrl

      console.log(this.props.recipeDetailData.recipeDetailData);
      return(
        <div>{this.props.recipeId === this.props.recipeDetailData.recipeDetailData.id ? <div><p>{name}</p><img src={image} /><p>{sourceUrl}</p><p>{totalTime}</p><p>{numberOfServings}</p></div> : null}</div>
      )
    }

  }
}

export default MainContainerContainer(RecipeSearchDisplay);
