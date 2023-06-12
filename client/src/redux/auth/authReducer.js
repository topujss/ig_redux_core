import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REG_FAILED, USER_REG_SUCCESS } from './actionTypes';
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
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        user: null,
        message: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
