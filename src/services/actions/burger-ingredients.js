import { getIngredients } from '../../utils/api';
import { logErrorToConsole } from '../../utils/utils';

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export function getData() {
  return function (dispatch) {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    
    getIngredients()
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
