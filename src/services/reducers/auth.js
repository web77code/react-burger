import {
  SEND_REGISTRTION_REQUEST,
  REGISTRTION_SUCCESSED,
  REGISTRTION_FAILED,
  SEND_LOGIN_REQUEST,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
} from "../actions/auth.js";

const data = JSON.parse(localStorage.getItem("user"));

const initialState = data
  ? {
      isAuth: true,
      data,
      sendRequest: false,
      requestFailed: false,
    }
  : {
      isAuth: false,
      data: {},
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
      };
    }
    case REGISTRTION_SUCCESSED: {
      return {
        ...state,
        isAuth: true,
        data: payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case REGISTRTION_FAILED: {
      return {
        ...state,
        sendRequest: false,
        isAuth: false,
      };
    }
    case SEND_LOGIN_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      };
    }
    case LOGIN_SUCCESSED: {
      return {
        ...state,
        isAuth: true,
        data: payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        sendRequest: false,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
