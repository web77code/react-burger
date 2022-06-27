import { CONFIG } from "../../utils/constants";
import { checkResponse, logErrorToConsole, buildAuthObject } from "../../utils/utils";

export const SEND_REGISTRTION_REQUEST = "SEND_REGISTRTION_REQUEST";
export const REGISTRTION_SUCCESSED = "REGISTRTION_SUCCESS";
export const REGISTRTION_FAILED = "REGISTRTION_FAILED";

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SEND_LOGOUT_REQUEST = "SEND_LOGOUT_REQUEST";
export const LOGOUT_SUCCESSED = "LOGOUT_SUCCESSED";
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
          const data = buildAuthObject(res);

          dispatch({
            type: REGISTRTION_SUCCESSED,
            payload: data,
          });

          localStorage.setItem("user", JSON.stringify(data));

          dispatch({
            type: LOGIN_SUCCESSED,
            payload: data,
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
          const data = buildAuthObject(res);
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

export function sendLogoutRequest() {
  return function (dispatch) {
    dispatch({
      type: SEND_LOGOUT_REQUEST,
    });

    const data = {
      token: JSON.parse(localStorage.getItem("user")).refreshToken,
    }

    fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.logout}`, {
      method: "POST",
      headers: CONFIG.HEADERS,
      body: JSON.stringify(data),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
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
