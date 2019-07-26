import { GET_MESSAGE } from '../actions/types';

const initialState = {
  success: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
