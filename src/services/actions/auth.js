import { CONFIG } from "../../utils/constants";
import { checkResponse, logErrorToConsole } from "../../utils/utils";

export const SEND_REGISTRTION_REQUEST = "SEND_REGISTRTION_REQUEST";
export const REGISTRTION_SUCCESSED = "REGISTRTION_SUCCESS";
export const REGISTRTION_FAILED = "REGISTRTION_FAILED";

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SEND_LOGOUT_REQUEST = "SEND_LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function sendRegistrationRequest(user) {
  return function (dispatch) {
    dispatch({
      type: SEND_REGISTRTION_REQUEST,
    });

    fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.register}`, {
      method: "POST",
      headers: CONFIG.HEADERS,
      body: JSON.stringify(user),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: REGISTRTION_SUCCESSED,
            payload: {
              user: res.user,
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            },
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
    fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.login}`, {
      method: "POST",
      headers: CONFIG.HEADERS,
      body: JSON.stringify(user),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          const data = {
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          };

          localStorage.setItem("user", JSON.stringify(data));

          dispatch({
            type: LOGIN_SUCCESSED,
            payload: data,
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
