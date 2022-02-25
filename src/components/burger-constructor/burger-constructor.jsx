import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElements from '../burger-elements/burger-elements.jsx';
import { sendData } from '../../services/actions/order-details';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);

  const burgerPrice = React.useMemo(
    () => {
      let price = 0;

      if(bun) price += ingredients.find((el) => el._id === bun).price * 2;
      if(items) items.forEach((item) => price += ingredients.find((el) => el._id === item.id).price);

      return price;
    },
    [bun, items, ingredients]
  );

  const handleOrderButtonClick = () => {
    const ingred = items.map(item => item.id);
    dispatch(sendData([bun, ...ingred, bun]));
  }

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements />

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
