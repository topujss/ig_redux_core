import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REG_FAILED, USER_REG_SUCCESS } from './actionTypes';
import axios from 'axios';

/**
 * User can register
 * @function userRegister
 */
export const userRegister =
  ({ input, setInput }) =>
  async (dispatch) => {
    try {
      axios
        .post(`http://localhost:5050/api/v1/auth/register`, input)
        .then((res) => {
          console.log(res.data);
          setInput({
            name: '',
            username: '',
            email: '',
            password: '',
          });
          dispatch({ type: USER_REG_SUCCESS, payload: res.data.message });
        })
        .catch((err) => {
          dispatch({ type: USER_REG_FAILED, payload: err.response.data.message });
        })
        .catch((err) => {
          dispatch({ type: USER_REG_FAILED, payload: err.response.data.message });
          console.log(err.message || err);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

/**
 * User can login
 * @function userLogin
 */
export const userLogin =
  ({ input, setInput, navigate }) =>
  async (dispatch) => {
    try {
      axios
        .post(`http://localhost:5050/api/v1/auth/login`, input)
        .then((res) => {
          console.log(res.data);
          setInput({
            email: '',
            password: '',
          });
          dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.user });
          navigate('/profile');
        })
        .catch((err) => {
          console.log(err.message || err);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

/**
 * User can logout
 * @function userLogout
 */
export const userLogout =
  ({ navigate }) =>
  async (dispatch) => {
    try {
      axios
        .post(`http://localhost:5050/api/v1/auth/logout`)
        .then((res) => {
          dispatch({ type: USER_LOGOUT, payload: res.data.message });
          navigate('/login');
        })
        .catch((err) => {
          console.log(err.message || err);
        });
    } catch (error) {
      console.error(error.message);
    }
  };
