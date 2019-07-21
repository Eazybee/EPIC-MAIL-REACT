import { SEND_GROUP_MESSAGE, ALERT, LOADING } from './types';
import post from '../utilities';

const sendMessageAction = ({ id, data }) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const res = await post('POST', `/groups/${id}/messages`, data, true);

    if ('error' in res) {
      throw new Error(res.error);
    }

    if ('data' in res) {
      dispatch({
        type: SEND_GROUP_MESSAGE,
        payload: res.data[0].message,
      });
    }
  } catch (error) {
    dispatch({ type: ALERT, payload: error.message });
    dispatch({ type: ALERT, payload: '' });
  } finally {
    dispatch({ type: LOADING, payload: false });
    dispatch({
      type: SEND_GROUP_MESSAGE,
      payload: '',
    });
  }
};

export default sendMessageAction;
