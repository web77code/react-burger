import { CONFIG } from '../../utils/constants';

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
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(res);
      })
      .then((res) => {
        if (res.success) {
          dispatch({
            type: SEND_ORDER_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({
            type: SEND_ORDER_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: SEND_ORDER_FAILED,
        });
      });
  };
}
