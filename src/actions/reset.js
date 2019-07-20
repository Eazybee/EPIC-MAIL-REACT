import { RESET, ALERT, LOADING } from './types';
import post from '../utilities';

const loginAction = obj => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const response = await post('POST', '/auth/reset', obj);
    const res = await response.json();

    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res) {
      dispatch({
        type: RESET,
        payload: res.data[0].message,
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
