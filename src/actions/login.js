import types from './types';
import Utility from '../utilities';

const { LOGIN, LOGIN_ERROR } = types;
const post = Utility.request;

const loginAction = obj => async (dispatch) => {
  dispatch({
    type: 'LOADING',
    payload: true,
  });

  try {
    const response = await post('POST', '/auth/login', obj);
    const res = await response.json();
    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res && 'token' in res.data[0]) {
      dispatch({
        type: LOGIN,
        payload: res.data[0].token,
      });
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
    dispatch({ type: LOGIN_ERROR, payload: '' });
  } finally {
    dispatch({ type: 'LOADING', payload: false });
  }
};

export default loginAction;
