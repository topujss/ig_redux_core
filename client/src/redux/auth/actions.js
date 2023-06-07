import { USER_REG_FAILED, USER_REG_SUCCESS } from './actionTypes';
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
