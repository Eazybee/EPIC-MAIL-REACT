import { combineReducers } from 'redux';
import login from './login';
import loading from './loading';
import signup from './signup';
import reset from './reset';
import alert from './alert';

const reducers = combineReducers({
  login,
  loading,
  signup,
  reset,
  alert,
});

export default reducers;
