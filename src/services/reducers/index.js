import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsPopupReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  construct: burgerConstructorReducer,
  details: ingredientDetailsPopupReducer,
});