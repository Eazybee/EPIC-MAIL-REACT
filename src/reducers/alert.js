import { ALERT } from '../actions/types';

const initialState = {
  alertMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT:
      return {
        ...state,
        alertMessage: action.payload,
      };
    default:
      return state;
  }
};
