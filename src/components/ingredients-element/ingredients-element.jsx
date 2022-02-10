import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-element.module.css';

const IngredientsElement = ({ id, name, price, image, count, openPopupWindow }) => {

  return (
    <div className={styles.ingredient} id={id} onClick={(e) => openPopupWindow(e)}>
      {count && <Counter count={count} size="default" />}
      <img src={image} className={'mb-1 ' + styles.image} alt={name} />
      <div className={'mb-1 ' + styles.priceContainer}>
        <p className={'text text_type_digits-default ' + styles.price}>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={'text text_type_main-default ' + styles.name}>{name}</h3>
    </div>
  );
}

IngredientsElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  count: PropTypes.number,
  openPopupWindow: PropTypes.func,
};

export default IngredientsElement;
