import React from "react";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElements from '../burger-elements/burger-elements.jsx';
import styles from './burger-constructor.module.css';

function BurgerConstructor() {

  const [ state ] = React.useState([
    { id: '60666c42cc7b410027a1a9b1', isLocked: true },
    { id: '60666c42cc7b410027a1a9b9', isLocked: false },
    { id: '60666c42cc7b410027a1a9b4', isLocked: false },
    { id: '60666c42cc7b410027a1a9bc', isLocked: false },
    { id: '60666c42cc7b410027a1a9bb', isLocked: false },
    { id: '60666c42cc7b410027a1a9bb', isLocked: false },
    { id: '60666c42cc7b410027a1a9b1', isLocked: true },
  ]);

  return (
    <section className={"pt-25 pl-4 pr-4 " + styles.BurgerConstructor}>
      <BurgerElements elements={state} />
      <div className={"mt-10 " + styles.orderSection}>
        <div className={"mr-10 " + styles.priceContainer}>
          <p className={"text text_type_digits-medium " + styles.price}>123450</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
