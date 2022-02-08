import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-element.module.css';

const IngredientsElement = props => {

  IngredientsElement.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
    openPopupWindow: PropTypes.func,
  };

  return (
    <div className={styles.ingredient} onClick={(e) => props.openPopupWindow(props.id,e)}>
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

export default IngredientsElement;
