import * as api from "../../utils/api";
import { logErrorToConsole } from "../../utils/utils";
import { setCookie, removeCookie } from "../../utils/cookies";

export const SEND_REGISTRTION_REQUEST = "SEND_REGISTRTION_REQUEST";
export const REGISTRTION_SUCCESSED = "REGISTRTION_SUCCESS";
export const REGISTRTION_FAILED = "REGISTRTION_FAILED";

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SEND_LOGOUT_REQUEST = "SEND_LOGOUT_REQUEST";
export const LOGOUT_SUCCESSED = "LOGOUT_SUCCESSED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const CHECK_TOKEN_REQUEST = "CHECK_TOKEN_REQUEST";
export const CHECK_TOKEN_SUCCESSED = "CHECK_TOKEN_SUCCESSED";
export const CHECK_TOKEN_UNSUCCESSED = "CHECK_TOKEN_UNSUCCESSED";
export const CHECK_TOKEN_FAILED = "CHECK_TOKEN_FAILED";

export const SEND_UPDATE_REQUEST = "SEND_UPDATE_REQUEST";
export const UPDATE_SUCCESSED = "UPDATE_SUCCESSED";
export const UPDATE_FAILED = "UPDATE_FAILED";

export function sendRegistrationRequest(user) {
  return function (dispatch) {
    dispatch({
      type: SEND_REGISTRTION_REQUEST,
    });

    api.createUserAccount(user)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: REGISTRTION_SUCCESSED,
            payload: res.user,
          });

          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTRTION_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}

export function sendLoginRequest(user) {
  return function (dispatch) {
    dispatch({
      type: SEND_LOGIN_REQUEST,
    });

    api.loginToAccount(user)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);

          dispatch({
            type: LOGIN_SUCCESSED,
            payload: res.user,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}

export function sendLogoutRequest() {
  return function (dispatch) {
    dispatch({
      type: SEND_LOGOUT_REQUEST,
    });

    const data = {
      token: localStorage.getItem("refreshToken"),
    };

    api.logoutFromAccount(data)
      .then((res) => {
        if (res.success) {
          removeCookie("token");
          localStorage.removeItem("refreshToken");

          dispatch({
            type: LOGOUT_SUCCESSED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}

export function checkAuthUser() {
  return function (dispatch) {
    dispatch({
      type: CHECK_TOKEN_REQUEST,
    });

    api.getUserData()
      .then((res) => {
        dispatch({
          type: CHECK_TOKEN_SUCCESSED,
          payload: res.user,
        });
      })
      .catch((err) => {
        if (err === "401 Unauthorized") {
          dispatch({
            type: CHECK_TOKEN_UNSUCCESSED,
          });
        } else {
          dispatch({
            type: CHECK_TOKEN_FAILED,
          });
          logErrorToConsole(err);
        }
      });
  };
}

export function updateUserInfo(data) {
  return function (dispatch) {
    dispatch({
      type: SEND_UPDATE_REQUEST,
    });

    api.updateUserData(data)
      .then((res) => {
        dispatch({
          type: UPDATE_SUCCESSED,
          payload: res.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}
