import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  CLOSE_ORDER_POPUP
} from '../actions/order-details.js';

const initialState = {
  showPopup: false,
  number: 0, 
  sendRequest: false,
  requestFailed: false,
};

export const orderDetailsPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST: {
      return {
        ...state,
        showPopup: true,
        sendRequest: true
      };
    }
    case SEND_ORDER_SUCCESS: {
      return { 
        ...state, 
        number: action.payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case SEND_ORDER_FAILED: {
      return { 
        ...state, 
        sendRequest: false,
        requestFailed: true,
      };
    }
    case CLOSE_ORDER_POPUP: {
      return { 
        ...state, 
        showPopup: false
      };
    }
    default: {
      return state;
    }
  }
};
