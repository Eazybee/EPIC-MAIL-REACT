import { SEND_MESSAGE, ALERT, LOADING } from './types';
import post from '../utilities';

const sendMessageAction = obj => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const res = await post('POST', '/messages', obj, true);

    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res) {
      dispatch({
        type: SEND_MESSAGE,
        payload: res.data[0].message,
      });
    }
  } catch (error) {
    dispatch({ type: ALERT, payload: error.message });
    dispatch({ type: ALERT, payload: '' });
  } finally {
    dispatch({ type: LOADING, payload: false });
    dispatch({
      type: SEND_MESSAGE,
      payload: '',
    });
  }
};

export default sendMessageAction;
