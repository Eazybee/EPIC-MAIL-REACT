import { SAVE_MESSAGE, ALERT, LOADING } from './types';
import post from '../utilities';

const saveMessageAction = obj => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const res = await post('POST', '/messages/draft', obj, true);

    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res) {
      dispatch({
        type: SAVE_MESSAGE,
        payload: res.data[0].message,
      });
    }
  } catch (error) {
    dispatch({ type: ALERT, payload: error.message });
    dispatch({ type: ALERT, payload: '' });
  } finally {
    dispatch({ type: LOADING, payload: false });
    dispatch({
      type: SAVE_MESSAGE,
      payload: '',
    });
  }
};

export default saveMessageAction;
