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
      const arraySortable = [...state.items].map((item, index) => {
        return { elementIndex: index, id: item.id }
      });
      arraySortable.push({ elementIndex: [...state.items].length, id: action.payload });
      return {
        ...state,
        items: arraySortable
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.elementIndex !== action.payload)
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
