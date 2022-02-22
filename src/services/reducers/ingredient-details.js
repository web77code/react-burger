import {
  SET_INGREDIENT_DETAILS,
  CLEAR_INGREDIENT_DETAILS,
} from '../actions/ingredient-details.js';

const initialState = {
  showPopup: false,
  name: '', 
  image_large: '', 
  calories: 0, 
  proteins: 0, 
  fat: 0, 
  carbohydrates: 0,
};

export const ingredientDetailsPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,
        showPopup: true,
        name: action.ingredient.name, 
        image_large: action.ingredient.image_large, 
        calories: action.ingredient.calories, 
        proteins: action.ingredient.proteins, 
        fat: action.ingredient.fat, 
        carbohydrates: action.ingredient.carbohydrates
      };
    }
    case CLEAR_INGREDIENT_DETAILS: {
      return { 
        ...state, 
        showPopup: false,
        name: '', 
        image_large: '', 
        calories: 0, 
        proteins: 0, 
        fat: 0, 
        carbohydrates: 0
      };
    }
    default: {
      return state;
    }
  }
};