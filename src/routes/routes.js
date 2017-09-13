import React from 'react'
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import Main from '../components/Main/Main';

const history = createHistory()

const routes = (
  <ConnectedRouter history={history}>
    <Route path='/' component={App}/>
  </ConnectedRouter>
)

export default routes
