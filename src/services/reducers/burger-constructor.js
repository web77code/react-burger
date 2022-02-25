import {
  SET_BUN,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_ITEM
} from '../actions/burger-constructor';

const initialState = {
  bun: '',
  items: []
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        bun: action.payload
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.uid !== action.payload)
      };
    }
    case MOVE_ITEM: {
      return {
        ...state,
        items: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
