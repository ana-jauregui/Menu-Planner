import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainerContainer from '../../containers/MainContainerContainer';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import FullRecipeInformation from '../FullRecipeInformation/FullRecipeInformation';
import './MainContainer.css'


export class MainContainer extends Component {

  render() {
console.log(this.props);

    const recipeSearchResults = this.props.recipeSearchData.recipeSearchData.matches

    const results = recipeSearchResults.map((recipe, i) => {

        return <RecipeSearchDisplay key={ i } recipeId={recipe.id} recipeName={recipe.recipeName} image={recipe.smallImageUrls[0]} time={recipe.totalTimeInSeconds} rating={recipe.rating} />
      })


    // if(this.props.recipeSearchData.isSearchComplete) {
      // <Redirect to='/recipe-search' />

      return(
        <div className='recipe-search-display-container'>
          { results }
        </div>
      )

    // }

    // if(this.props.recipeSearchData.isSearchComplete) {
    //   <Redirect to='/recipe-search' />
    // }

    // if(this.props.recipeSearchData.isSearchComplete === true && this.props.recipeDetailData.recipeDetailRequested === true) {

      // const { name, totalTime, numberOfServings, ingredientLines } = this.props.recipeDetailData.recipeDetailData
      // const image = this.props.recipeDetailData.recipeDetailData.images[0].hostedLargeUrl
      // const sourceUrl = this.props.recipeDetailData.recipeDetailData.source.sourceRecipeUrl
      // const ingredients = ingredientLines.map((ingredient, i) => <ul key={i}><li>{ingredient}</li></ul>)

      // console.log(this.props.recipeDetailData.recipeDetailData);
      // return(
      //   <div>
      //     <FullRecipeInformation />
      //   </div>
        // <div>{this.props.recipeId === this.props.recipeDetailData.recipeDetailData.id ? <div><div>
        //   <p>{name}</p>
        //   <img src={image} />
        //   <button onClick={() => window.open(sourceUrl)}>View Instructions</button>
        //   <p>Total Cook Time: {totalTime}</p>
        //   <p>Number of Servings: {numberOfServings}</p>
        // </div>{ingredients}</div>: null}</div>
    //   )


  }
}

export default MainContainerContainer(MainContainer);
