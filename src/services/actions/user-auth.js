import { CONFIG } from '../../utils/constants';
import { checkResponse, logErrorToConsole } from '../../utils/utils';

export const SEND_REGISTRTION_REQUEST = 'SEND_REGISTRTION_REQUEST';
export const REGISTRTION_SUCCESSED = 'REGISTRTION_SUCCESS';
export const REGISTRTION_FAILED = 'REGISTRTION_FAILED';

export function sendRegistrationRequest(user) {
  return function (dispatch) {
    dispatch({
      type: SEND_REGISTRTION_REQUEST,
    });

    fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.REGISTER}`, {
      method: 'POST',
      headers: CONFIG.HEADERS,
      body: JSON.stringify(user),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch({
          type: REGISTRTION_SUCCESSED,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTRTION_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}
