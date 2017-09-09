import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import MainContainerContainer from './containers/MainContainerContainer';
import MainContainer from './components/MainContainer/MainContainer'
// import { mockDataRecipeSearch, mockDataRecipeGet } from './utils/mockData';

class App extends Component {


  render() {
console.log(this.props);
    return (
      <div className="App">

          <Header />
          <SearchControl />
          {this.props.recipeSearchData.isSearchComplete && <MainContainer /> }
          {/* <MainContainer /> */}
      </div>
    );
  }
}

export default MainContainerContainer(App);
