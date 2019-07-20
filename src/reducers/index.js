import { combineReducers } from 'redux';
import login from './login';
import loading from './loading';
import signup from './signup';
import alert from './alert';

const reducers = combineReducers({
  login,
  loading,
  signup,
  alert,
});

export default reducers;
