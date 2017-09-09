import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import { createStore, applyMiddleware } from 'redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/CreateBrowserHistory';
// import thunk from 'redux-thunk';
import './index.css';
// import rootReducer from './reducers/index-reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const history = createHistory()
// const initialState = {}

// const store = createStore(
//   rootReducer,
//   initialState,
//   devTools,
//   applyMiddleware(thunk),
// )

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <App />
  {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
