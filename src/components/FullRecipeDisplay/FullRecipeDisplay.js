import React, { Component } from 'react'
import MainContainerContainer from '../../containers/MainContainerContainer';

export class FullRecipeDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, totalTime, numberOfServings, ingredientLines } = this.props.recipeDetailData.recipeDetailData
    const image = this.props.recipeDetailData.recipeDetailData.images[0].hostedLargeUrl
    const sourceUrl = this.props.recipeDetailData.recipeDetailData.source.sourceRecipeUrl
    const ingredients = ingredientLines.map((ingredient, i) => <ul key={i}><li>{ingredient}</li></ul>)

    return(
      <div>{this.props.recipeId === this.props.recipeDetailData.recipeDetailData.id ? <div><div>
        <p>{name}</p>
        <img src={image} />
        <button onClick={() => window.open(sourceUrl)}>View Instructions</button>
        <p>Total Cook Time: {totalTime}</p>
        <p>Number of Servings: {numberOfServings}</p>
     </div>{ingredients}</div>: null}</div>
    )
  }
}

export default MainContainerContainer(FullRecipeDisplay);
