import PropTypes from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { constructorState } from '../../utils/constructor-state.js';
import BurgerElements from '../burger-elements/burger-elements.jsx';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ data, openPopupWindow}) => {

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      __v: PropTypes.number,
      _id: PropTypes.string,
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      proteins: PropTypes.number,
      type: PropTypes.string,
    })),
    openPopupWindow: PropTypes.func,
  };

  const getSum = () => {
    let sum = 0;

    constructorState.forEach((item) => {
      sum += data.find((el) => el._id === item.id).price;
    });

    return sum;
  };

  const fixedElements = constructorState
    .filter((el) => el.isLocked)
    .map((i) => data.find((ingredient) => ingredient._id === i.id));
  const mobilityElements = constructorState
    .filter((el) => !el.isLocked)
    .map((i) => data.find((ingredient) => ingredient._id === i.id));

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements fixedElements={fixedElements} mobilityElements={mobilityElements} />

      <div className={'mt-10 pr-4 ' + styles.orderSection}>
        <div className={'mr-10 ' + styles.priceContainer}>
          <p className={'text text_type_digits-medium ' + styles.price}>{getSum()}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large"  onClick={(e) => openPopupWindow('',e)}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
