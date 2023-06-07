import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

// create root reducer
const rootReducer = combineReducers({
  authStore: authReducer,
});

export default rootReducer;
