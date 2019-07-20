import { RESET } from '../actions/types';

const initialState = {
  success: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
