import { SIGNUP, ALERT, LOADING } from './types';
import post from '../utilities';


const signupAction = obj => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const response = await post('POST', '/auth/signup', obj);
    const res = await response.json();

    if ('error' in res) {
      throw new Error(res.error);
    }
    if ('data' in res && 'token' in res.data[0]) {
      dispatch({
        type: SIGNUP,
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

export default signupAction;
