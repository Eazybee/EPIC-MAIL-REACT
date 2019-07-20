import { ALERT } from './types';

const alertAction = message => (dispatch) => {
  dispatch({ type: ALERT, payload: message });
  setTimeout(() => {
    dispatch({ type: ALERT, payload: '' });
  }, 1000);
};

export default alertAction;
