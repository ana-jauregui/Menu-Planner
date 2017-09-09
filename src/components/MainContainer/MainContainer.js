import React, { Component } from 'react';
import MainContainerContainer from '../../containers/MainContainerContainer'

export class MainContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchInitialRecipes(`http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=onion+soup`)
  // }

  render() {
    console.log('mainContainer',this.props);
    // if(this.props.recipeSearchData !== undefined) {
    //   const recipes = this.props.recipeSearchData.matches.map((recipe, i) => <div key={i}> {recipe.recipeName} </div>)

      return(
        <div>
          {/* {recipes} */}
          MainContainer
        </div>
      )
    // }
    // const recipes = data.matches.map(recipe => <img alt='' src={ recipe.smallImageUrls } /> )
  }
}

export default MainContainerContainer(MainContainer);
