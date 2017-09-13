import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchControl from './components/Controls/SearchControl';
import MainContainerContainer from './containers/MainContainerContainer';
import Main from './components/Main/Main';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <SearchControl />
        <Main />
      </div>
    );
  }
}

export default MainContainerContainer(App);
