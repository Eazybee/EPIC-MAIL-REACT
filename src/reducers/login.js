import { LOGIN } from '../actions/types';

const initialState = {
  token: localStorage.getItem('auth') || '',
  userEmail: localStorage.getItem('userEmail') || '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
