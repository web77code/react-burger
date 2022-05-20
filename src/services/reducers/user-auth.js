import {
  SEND_REGISTRTION_REQUEST,
  REGISTRTION_SUCCESSED,
  REGISTRTION_FAILED,
} from '../actions/user-auth.js';

const initialState = {
  isAuth: false,
  user: {
    name: '',
    email: ''
  },
  accessToken: '',
  sendRequest: false
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REGISTRTION_REQUEST: {
      return {
        ...state,
        sendRequest: true
      };
    }
    case REGISTRTION_SUCCESSED: {
      return {
        ...state,
        sendRequest: false,
        isAuth: true,
        user: {...action.payload}
      };
    }
    case REGISTRTION_FAILED: {
      return {
        ...state,
        sendRequest: false,
        isAuth: false
      };
    }
    default: {
      return state;
    }
  }
};
