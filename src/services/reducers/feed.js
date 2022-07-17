import {
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/orders";

const initialState = {
  wsUrl: '',
  isFetching: false,
  wsConnected: false,
  data: null,
  error: undefined,
};

export const feedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WS_CONNECTION_FETCHING: {
      return {
        ...state,
        isFetching: true,
        wsConnected: false,
        error: undefined,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        wsConnected: true,
        error: undefined,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        wsConnected: true,
        error: true,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        isFetching: false,
        wsConnected: false,
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        error: undefined,
        data: JSON.parse(payload),
      };
    }
    default:
      return state;
  }
}
