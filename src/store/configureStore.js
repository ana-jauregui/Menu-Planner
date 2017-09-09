import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index-reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        devTools,
        applyMiddleware(thunk)
    );
}

export default configureStore;
