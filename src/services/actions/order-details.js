import { CONFIG } from '../../utils/constants';
import { checkResponse, logErrorToConsole } from '../../utils/utils';

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const CLOSE_ORDER_POPUP = 'CLOSE_ORDER_POPUP';

export function sendData(burger) {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST,
    });

    fetch(`${CONFIG.BASE_URL}/orders`, {
      method: 'POST',
      headers: CONFIG.HEADERS,
      body: JSON.stringify({
        ingredients: burger,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          payload: res.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: SEND_ORDER_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}

export function closeOrderPopup() {
  return { 
    type: CLOSE_ORDER_POPUP
  }
}
