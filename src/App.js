import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
// import MainContainerContainer from './containers/MainContainerContainer';
import MainContainer from './components/MainContainer/MainContainer'
// import { mockDataRecipeSearch, mockDataRecipeGet } from './utils/mockData';

class App extends Component {


  render() {

    return (
      <div className="App">

          <Header />
          <SearchControl />
          <MainContainer />

          {/* {this.state.recipeData && <MainContainer data={ this.state.recipeData }/>} */}

      </div>
    );
  }
}

export default App;
