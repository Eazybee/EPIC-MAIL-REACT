import types from '../actions/types';

const { LOGIN, LOGIN_ERROR } = types;
const initialState = {
  token: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
