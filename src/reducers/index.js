import { combineReducers } from 'redux';
import login from './login';
import loading from './loading';
import signup from './signup';
import reset from './reset';
import sendMessage from './sendMessage';
import sendGroupMessage from './sendGroupMessage';
import saveMessage from './saveMessage';
import getMessage from './getMessage';
import alert from './alert';

const reducers = combineReducers({
  login,
  loading,
  signup,
  reset,
  sendMessage,
  sendGroupMessage,
  saveMessage,
  getMessage,
  alert,
});

export default reducers;
