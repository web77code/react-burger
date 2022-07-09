import {
  SEND_REGISTRTION_REQUEST,
  REGISTRTION_SUCCESSED,
  REGISTRTION_FAILED,
  SEND_LOGIN_REQUEST,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  SEND_LOGOUT_REQUEST,
  LOGOUT_SUCCESSED,
  LOGOUT_FAILED,
  CHECK_TOKEN_REQUEST,
  CHECK_TOKEN_SUCCESSED,
  CHECK_TOKEN_UNSUCCESSED,
  CHECK_TOKEN_FAILED,
} from "../actions/auth.js";

const initialState = {
  isAuthChecked: false,
  data: null,
  sendRequest: false,
  requestFailed: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEND_REGISTRTION_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case REGISTRTION_SUCCESSED: {
      return {
        ...state,
        data: payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case REGISTRTION_FAILED: {
      return {
        isAuthChecked: false,
        data: null,
        sendRequest: false,
        requestFailed: true,
      };
    }
    case SEND_LOGIN_REQUEST: {
      return {
        isAuthChecked: false,
        data: null,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case LOGIN_SUCCESSED: {
      return {
        isAuthChecked: true,
        data: payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        isAuthChecked: false,
        data: null,
        sendRequest: false,
        requestFailed: true,
      };
    }
    case SEND_LOGOUT_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      };
    }
    case LOGOUT_SUCCESSED: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        sendRequest: false,
        requestFailed: true,
      };
    }
    case CHECK_TOKEN_REQUEST: {
      return {
        isAuthChecked: false,
        data: null,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case CHECK_TOKEN_SUCCESSED: {
      return {
        isAuthChecked: true,
        data: payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case CHECK_TOKEN_UNSUCCESSED: {
      return {
        isAuthChecked: true,
        data: null,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case CHECK_TOKEN_FAILED: {
      return {
        isAuthChecked: true,
        data: null,
        sendRequest: false,
        requestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
