import {
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/orders";

import { compareOrdersDate } from "../../utils/helpers";

const initialState = {
  isFetching: false,
  wsConnected: false,
  orders: [],
  total: undefined,
  totalToday: undefined,
  error: undefined,
};

export const feedReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WS_CONNECTION_FETCHING: {
      return {
        ...state,
        orders: [],
        isFetching: true,
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
        orders: [],
        wsConnected: false,
        error: undefined,
      };
    }
    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        orders: [],
      };
    }
    case WS_GET_ORDERS: {
      const { orders, total, totalToday } = payload;

      const filteredOrders = orders.filter((item) => {
        return item.ingredients.every((el) => el !== null);
      });
      filteredOrders.sort(compareOrdersDate);

      return {
        ...state,
        error: undefined,
        orders: filteredOrders,
        total,
        totalToday,
      };
    }
    default:
      return state;
  }
}
