import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainContainerContainer from '../../containers/MainContainerContainer';
import FullRecipeInformation from '../FullRecipeInformation/FullRecipeInformation';
import './RecipeSearchDisplay.css';

export class RecipeSearchDisplay extends Component {
  constructor(){
    super();
  }

  viewRecipeDetail(recipeId) {
    this.props.fetchRecipeSearchDetail(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
  }

  render() {

    // if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === false) {

      const { recipeId ,recipeName, image, time, rating } = this.props

      return(
        <Link to='/recipe-details' >
          <div onClick={() => this.viewRecipeDetail(recipeId)}>
            <p>{ recipeName }</p>
            <img src={ image }/>
            <p>{`Rating: ${rating}`}</p>
            <p>{`Cook Time: ${time/60} min`}</p>
          </div>
        </Link>
      )
    // }

    if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === true) {
    //
    //   const { name, totalTime, numberOfServings, ingredientLines } = this.props.recipeDetailData.recipeDetailData
    //   const image = this.props.recipeDetailData.recipeDetailData.images[0].hostedLargeUrl
    //   const sourceUrl = this.props.recipeDetailData.recipeDetailData.source.sourceRecipeUrl
    //   const ingredients = ingredientLines.map((ingredient, i) => <ul key={i}><li>{ingredient}</li></ul>)
    //
    //   console.log(this.props.recipeDetailData.recipeDetailData);
      return(
        <div>
          <FullRecipeInformation />
        </div>
    //     <div>{this.props.recipeId === this.props.recipeDetailData.recipeDetailData.id ? <div><div>
    //       <p>{name}</p>
    //       <img src={image} />
    //       <button onClick={() => window.open(sourceUrl)}>View Instructions</button>
    //       <p>Total Cook Time: {totalTime}</p>
    //       <p>Number of Servings: {numberOfServings}</p>
    //     </div>{ingredients}</div>: null}</div>
      )
    }
  }
}

export default MainContainerContainer(RecipeSearchDisplay);
