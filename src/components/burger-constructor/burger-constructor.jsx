import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { constructorDefaultState } from '../../utils/constructor-state.js';
import BurgerElements from '../burger-elements/burger-elements.jsx';
import { IngredientsContext } from '../../services/appContext';
import styles from './burger-constructor.module.css';

function priceReducer(state,action) {
  switch (action.type) {
    case 'add':
      return state += action.price;
    case 'remove':
      return state -= action.price;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

const BurgerConstructor = ({ openPopupWindow }) => {

  const ingredients = React.useContext(IngredientsContext);

  const [state, setState] = React.useState({
    bun: {},
    burgerInsides: [],
  });

  const [burgerPrice, burgerPriceDispatcher] = React.useReducer(priceReducer, 0);

  React.useEffect(() => {
    let bun = '';
    const burgerInsides = [];

    constructorDefaultState.forEach((ingredient) => {
      let ingredientData = ingredients.data.find((el) => el._id === ingredient);

      if(ingredientData.type === 'bun') {
        if(bun === '') {
          bun = ingredientData;
          burgerPriceDispatcher({type: 'add', price: ingredientData.price*2});
        } else {
          burgerPriceDispatcher({type: 'remove', price: ingredientData.price*2});
          bun = ingredientData;
        }
      } else {
        burgerInsides.push(ingredientData);
        burgerPriceDispatcher({type: 'add', price: ingredientData.price});
      }
    });

    setState({bun, burgerInsides});
  }, []);

  const handleOrderButtonClick = () => {
    const currentBurger = [];

    currentBurger.push(state.bun._id);

    state.burgerInsides.forEach((el) => {
      currentBurger.push(el._id);
    });
    currentBurger.push(state.bun._id);

    openPopupWindow(currentBurger);
  }

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements fixedElements={state.bun} mobilityElements={state.burgerInsides} />

      <div className={'mt-10 pr-4 ' + styles.orderSection}>
        <div className={'mr-10 ' + styles.priceContainer}>
          <p className={'text text_type_digits-medium ' + styles.price}>{burgerPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOrderButtonClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  openPopupWindow: PropTypes.func,
};

export default BurgerConstructor;
