import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { constructorDefaultState } from '../../utils/constructor-state.js';
import BurgerElements from '../burger-elements/burger-elements.jsx';

import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ openPopupWindow }) => {

  const ingredients = useSelector(state => state.ingredients.data);

  const [state, setState] = React.useState({
    bun: {},
    burgerInsides: [],
  });

  React.useEffect(() => {
    let bun = '';
    const burgerInsides = [];

    constructorDefaultState.forEach((ingredient) => {
      let ingredientData = ingredients.find((el) => el._id === ingredient);

      if(ingredientData.type === 'bun') {
        bun = ingredientData;
      } else {
        burgerInsides.push(ingredientData);
      }
    });

    setState({bun, burgerInsides});
  }, [ingredients]);

  const burgerPrice = React.useMemo(
    () => {
      let price = 0;

      price += state.bun.price * 2;
      state.burgerInsides.forEach((el) => {
        price += el.price;
      });

      return price;
    },
    [state]
  );

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
          <p className={'text text_type_digits-medium ' + styles.price}>{burgerPrice ? burgerPrice : '...'}</p>
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
  openPopupWindow: PropTypes.func.isRequired,
};

export default BurgerConstructor;
