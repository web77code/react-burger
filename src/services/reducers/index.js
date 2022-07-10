import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderDetailsPopupReducer } from "./order-details";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  construct: burgerConstructorReducer,
  order: orderDetailsPopupReducer,
  user: authReducer,
});
