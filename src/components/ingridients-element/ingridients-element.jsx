import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridients-element.module.css';

const IngridientsElement = props => {

  IngridientsElement.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number
  };

  return (
    <div className={styles.ingridient}>
      {props.count && <Counter count={props.count} size="default" />}
      <img src={props.image} className={'mb-1 ' + styles.image} alt={props.name} />
      <div className={'mb-1 ' + styles.priceContainer}>
        <p className={'text text_type_digits-default ' + styles.price}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={'text text_type_main-default ' + styles.name}>{props.name}</h3>
    </div>
  );
};

export default IngridientsElement;
