import { LOGIN, ALERT, LOADING } from './types';
import post from '../utilities';

const loginAction = obj => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const res = await post('POST', '/auth/login', obj);

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
    dispatch({ type: ALERT, payload: error.message });
    dispatch({ type: ALERT, payload: '' });
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
};

export default loginAction;
