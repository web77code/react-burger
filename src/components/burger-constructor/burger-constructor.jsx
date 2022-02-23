import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerElements from '../burger-elements/burger-elements.jsx';

import { SET_BUN, ADD_ITEM } from '../../services/actions/burger-constructor';
import { defaultBurger } from '../../utils/constructor-state.js';

import styles from './burger-constructor.module.css';


const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);

  useEffect(() => {
    if(bun.length === 0 && items.length === 0) {
      dispatch({
        type: SET_BUN,
        payload: defaultBurger.bun
      });
  
      defaultBurger.items.forEach(item => {
        dispatch({
          type: ADD_ITEM,
          payload: item
        });
      });
    }
  }, []);

  const burgerPrice = React.useMemo(
    () => {
      let price = 0;

      if(bun) {
        price += ingredients.find((el) => el._id === bun).price * 2;
      }

      if(items) {
        items.forEach((item) => {
          price += ingredients.find((el) => el._id === item).price;
        });
      }

      return price;
    },
    [bun, items]
  );

  const handleOrderButtonClick = () => {

  }

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      {
        bun.length > 0 && 
        items.length > 0 && 
        <BurgerElements />
      }

      <div className={'mt-10 pr-4 ' + styles.orderSection}>
        <div className={'mr-10 ' + styles.priceContainer}>
          <p className={'text text_type_digits-medium ' + styles.price}>{burgerPrice ? burgerPrice : ''}</p>
          <CurrencyIcon type="primary" />
        </div>

        { 
          burgerPrice > 0 ?
            <Button type="primary" size="large" onClick={handleOrderButtonClick}>
              Оформить заказ
            </Button> :
            ''
        }

      </div>
    </section>
  );
}

export default BurgerConstructor;
