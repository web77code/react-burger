import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { constructorDefaultState } from '../../utils/constructor-state.js';
import BurgerElements from '../burger-elements/burger-elements.jsx';

import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);
  const bunData = ingredients.find((el) => el._id === bun);
  const itemsData = items.map((item) => {
    return ingredients.find((el) => el._id === item.id);
  });

  const burgerPrice = React.useMemo(
    () => {
      let price = 0;

      price += bunData.price * 2;
      itemsData.forEach((el) => {
        price += el.price;
      });

      return price;
    },
    [bunData, itemsData]
  );

  const handleOrderButtonClick = () => {
  //   const currentBurger = [];

  //   currentBurger.push(state.bun._id);

  //   state.burgerInsides.forEach((el) => {
  //     currentBurger.push(el._id);
  //   });
  //   currentBurger.push(state.bun._id);

  //   openPopupWindow(currentBurger);
  }

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements />

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

export default BurgerConstructor;
