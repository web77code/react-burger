import {
  SET_DEFAULT_INGREDIENTS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions/burger-constructor';

const initialState = {
  bun: '60d3b41abdacab0026a733c6',
  items: [
    { pos: 0, id: '60d3b41abdacab0026a733ce'},
    { pos: 1, id: '60d3b41abdacab0026a733c9'},
    { pos: 2, id: '60d3b41abdacab0026a733d1'},
  ]
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};