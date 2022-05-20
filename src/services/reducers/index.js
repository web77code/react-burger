import { combineReducers } from 'redux';

import { burgerIngredientsReducer } from './burger-ingredients';
import { burgerConstructorReducer } from './burger-constructor';
import { ingredientDetailsPopupReducer } from './ingredient-details';
import { orderDetailsPopupReducer } from './order-details';
import { userAuthReducer } from './user-auth';

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  construct: burgerConstructorReducer,
  details: ingredientDetailsPopupReducer,
  order: orderDetailsPopupReducer,
  userAuth: userAuthReducer,
});
