import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Route, NavLink, Link } from 'react-router-dom';
import MainContainerContainer from '../../containers/MainContainerContainer';
import RecipeSearchDisplay from '../RecipeSearchDisplay/RecipeSearchDisplay';
import FullDetailDisplay from '../FullDetailDisplay/FullDetailDisplay';
import Header from '../Header/Header';
import SearchControl from '../Controls/SearchControl';
import './Main.css'


export class Main extends Component {

  render() {
    return(
      <div>
        <Header />
        <SearchControl />
        <Route path='/recipe-search' component={RecipeSearchDisplay} />
        {/* <Route path='/recipe-details' component={FullDetailDisplay} /> */}
      </div>
    )
  }
}

export default MainContainerContainer(Main);
