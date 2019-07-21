import { SEND_GROUP_MESSAGE } from '../actions/types';

const initialState = {
  success: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_GROUP_MESSAGE:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
