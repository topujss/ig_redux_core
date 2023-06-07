import { USER_REG_FAILED, USER_REG_SUCCESS } from './actionTypes';
import initialState from './initialState';

// create an auth reducer
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REG_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case USER_REG_FAILED:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
