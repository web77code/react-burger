import { CONFIG } from '../../utils/constants';
import { checkResponse, logErrorToConsole } from '../../utils/utils';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export function getData() {
  return function (dispatch) {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    fetch(`${CONFIG.BASE_URL}/${CONFIG.END_POINTS.INGREDIENTS}`, { headers: CONFIG.HEADERS })
      .then(checkResponse)
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => { 
        dispatch({
          type: GET_DATA_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}
