import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux middlewares
const middlewares = [thunk];

// create a store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
