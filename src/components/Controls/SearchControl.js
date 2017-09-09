import React, { Component } from 'react';
import MainContainerContainer from '../../containers/MainContainerContainer';
import './SearchControl.css';

export class SearchControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeSearch: '',
    }
  }

  userRecipeSearch(e) {
    const userSearch = e.target.value.split(' ').join('+')

    this.setState({
      recipeSearch: userSearch
    })
  }

  promptRecipeSearch() {
      const recipeSearchResult = this.props.fetchInitialRecipes(`http://api.yummly.com/v1/api/recipes?_app_id=9a8c8d11&_app_key=acf75735b021b0bc07dcbfd169e21b59&q=${this.state.recipeSearch}`)
  }

  render() {
    return (
      <div className='main-search'>
        <input type='text' placeholder='Search' onChange={ e => this.userRecipeSearch(e) }/>
        <button onClick={ () => this.promptRecipeSearch() }>Search</button>
      </div>
    )
  }
}

export default MainContainerContainer(SearchControl)
