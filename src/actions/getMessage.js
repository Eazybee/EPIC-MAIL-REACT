import { GET_MESSAGE, ALERT } from './types';
import post from '../utilities';

const loginAction = path => async (dispatch) => {
  try {
    const res = await post('GET', path, null, true);

    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res) {
      dispatch({
        type: GET_MESSAGE,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({ type: ALERT, payload: error.message });
    dispatch({ type: ALERT, payload: '' });
  } finally {
    dispatch({
      type: GET_MESSAGE,
      payload: [],
    });
  }
};

export default loginAction;
