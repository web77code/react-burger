import { CONFIG } from "../../utils/constants";

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export function getData() {
  return function(dispatch) {
    dispatch({
      type: GET_DATA_REQUEST
    });
    fetch(`${CONFIG.BASE_URL}/ingredients`, {headers: CONFIG.HEADERS})
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res);
      })
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_DATA_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: GET_DATA_FAILED
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_DATA_FAILED
        });
      });
  }
}
