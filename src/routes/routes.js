import React from 'react'
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Main from '../components/Main/Main';
// import RecipeDetailDisplay from '../components/RecipeDetailDisplay/RecipeDetailDisplay';
// import RecipeSearchDisplay from '../components/RecipeSearchDisplay/RecipeSearchDisplay';

const history = createHistory()

const routes = (
  <ConnectedRouter history={history}>
    <Route path='/' component={Main}/>
  </ConnectedRouter>
)

export default routes
