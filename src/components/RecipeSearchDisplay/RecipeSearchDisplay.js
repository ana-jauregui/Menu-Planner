import React from 'react';
import './RecipeSearchDisplay.css';

const RecipeSearchDisplay = ({ recipeId ,recipeName, image, time, rating }) => {

  const viewRecipeDetail = (recipeId) => {
    fetch(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return(
    <div onClick={() => viewRecipeDetail(recipeId)}>
      <p>{ recipeName }</p>
      <img src={ image }/>
      <p>{`Rating: ${rating}`}</p>
      <p>{`Cook Time: ${time/60} min`}</p>
    </div>
  )
}

export default RecipeSearchDisplay;
