import { SIGNUP } from '../actions/types';


const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
