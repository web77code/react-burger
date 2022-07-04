import { logErrorToConsole } from "../../utils/utils";
import { setCookie, getCookie, removeCookie } from "../../utils/cookies";
import {
  userRegistration,
  userLogin,
  userLogout,
  getUserData,
  getNewToken,
} from "../../utils/api";

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
export const CHECK_TOKEN_NOTOKEN = "CHECK_TOKEN_NOTOKEN";

export function sendRegistrationRequest(user) {
  return function (dispatch) {
    dispatch({
      type: SEND_REGISTRTION_REQUEST,
    });

    userRegistration(user)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: REGISTRTION_SUCCESSED,
            payload: res.user,
          });

          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("user", JSON.stringify(res.refreshToken));

          dispatch({
            type: LOGIN_SUCCESSED,
            payload: res.user,
          });
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

    userLogin(user)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("user", JSON.stringify(res.refreshToken));

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
      token: JSON.parse(localStorage.getItem("user")),
    };

    userLogout(data)
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("user");
          removeCookie("token");

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
    const accessToken = getCookie("token");

    if (accessToken) {
      dispatch({
        type: CHECK_TOKEN_REQUEST,
      });

      getUserData("Bearer " + accessToken)
        .then((res) => {
          if (res.success) {
            dispatch({
              type: CHECK_TOKEN_SUCCESSED,
              payload: res.user,
            });
          }
        })
        .catch((err) => {
          if (err.indexOf("403")) {
            const data = {
              token: JSON.parse(localStorage.getItem("user")),
            };

            getNewToken(data)
              .then((response) => {
                if (response.success) {
                  setCookie("token", response.accessToken.split("Bearer ")[1]);

                  dispatch({
                    type: CHECK_TOKEN_SUCCESSED,
                    payload: response.user,
                  });
                }
              })
              .catch((response) => {
                dispatch({
                  type: CHECK_TOKEN_UNSUCCESSED,
                });
                logErrorToConsole(response);
              });
          } else {
            dispatch({
              type: CHECK_TOKEN_FAILED,
            });
            logErrorToConsole(err);
          }
        });
    } else {
      const token = JSON.parse(localStorage.getItem("user"));

      if (token) {
        const data = {
          token: JSON.parse(localStorage.getItem("user")),
        };

        getNewToken(data)
          .then((response) => {
            if (response.success) {
              setCookie("token", response.accessToken.split("Bearer ")[1]);

              dispatch({
                type: CHECK_TOKEN_SUCCESSED,
                payload: response.user,
              });
            }
          })
          .catch((response) => {
            dispatch({
              type: CHECK_TOKEN_FAILED,
            });
            logErrorToConsole(response);
          });
      } else {
        dispatch({
          type: CHECK_TOKEN_NOTOKEN,
        });
      }
    }
  };
}
