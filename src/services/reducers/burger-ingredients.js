import {
  GET_DATA_REQUEST,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
} from '../actions/burger-ingredients';

const initialState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      };
    }
    case GET_DATA_SUCCESS: {
      return { 
        ...state, 
        data: [...state.data, ...action.payload], 
        dataRequest: false,
        dataFailed: false
      };
    }
    case GET_DATA_FAILED: {
      return { 
        ...state,
        dataRequest: false, 
        dataFailed: true
      };
    }
    default: {
      return state;
    }
  }
};