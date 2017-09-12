import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import MainContainerContainer from './containers/MainContainerContainer';
import Main from './components/Main/Main';
// import RecipeSearchDisplay from './components/RecipeSearchDisplay/RecipeSearchDisplay';
// import { mockDataRecipeSearch, mockDataRecipeGet } from './utils/mockData';

class App extends Component {

  render() {

    return (
      <div className="App">

          <Header />
          <SearchControl />
          {/* <MainContainer /> */}
          <Route exact path='/' component={Main} />
          {/* {this.props.recipeSearchData.isSearchComplete && <MainContainer /> } */}

      </div>
    );
  }
}

export default MainContainerContainer(App);
