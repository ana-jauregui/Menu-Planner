import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import './RecipeSearchDisplay.css';

const RecipeSearchDisplay = ({ recipeName, image, time, rating }) => {
  return(
    <div>
      <p>{ recipeName }</p>
      <img src={ image }/>
      <p>{ rating }</p>
      <p>{ time }</p>
    </div>
  )
}

export default RecipeSearchDisplay;
