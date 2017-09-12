import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import MainContainerContainer from './containers/MainContainerContainer';
import MainContainer from './components/MainContainer/MainContainer';
import FullRecipeInformation from './components/FullRecipeInformation/FullRecipeInformation';
import RecipeSearchDisplay from './components/RecipeSearchDisplay/RecipeSearchDisplay';

// import RecipeSearchDisplay from './components/RecipeSearchDisplay/RecipeSearchDisplay';
// import { mockDataRecipeSearch, mockDataRecipeGet } from './utils/mockData';

class App extends Component {

  render() {
    return (
      <div className="App">

          <Header />
          <SearchControl />
          {/* <Route exact path='/' component={MainContainer} /> */}
          {this.props.recipeSearchData.isSearchComplete && <MainContainer /> }
          <Route exact path='/recipe-search' component={RecipeSearchDisplay} />
          <Route exact path='/recipe-details' component={FullRecipeInformation} />

      </div>
    );
  }
}

export default MainContainerContainer(App);
