import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsPopupReducer } from './ingredient-details';

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  details: ingredientDetailsPopupReducer,
});