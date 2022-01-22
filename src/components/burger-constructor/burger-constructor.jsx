import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngridients } from '../../utils/data.js';
import { constructorState } from '../../utils/constructor-state.js';
import BurgerElements from '../burger-elements/burger-elements.jsx';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
  const getSum = () => {
    let sum = 0;
    constructorState.forEach((item) => {
      sum += allIngridients.find((el) => el._id === item.id).price;
    });

    return sum;
  };

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements
        fixedElements={constructorState.filter((el) => el.isLocked)}
        mobilityElements={constructorState.filter((el) => !el.isLocked)}
      />

      <div className={'mt-10 pr-4 ' + styles.orderSection}>
        <div className={'mr-10 ' + styles.priceContainer}>
          <p className={'text text_type_digits-medium ' + styles.price}>{getSum()}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
