import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-element.module.css';

const IngredientsElement = ({ id, name, price, image, count, openPopupWindow }) => {

  return (
    <div className={styles.ingredient} id={id} onClick={(e) => openPopupWindow(e)}>
      {(count > 0) && <Counter count={count} size="default" />}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number,
  openPopupWindow: PropTypes.func.isRequired,
};

IngredientsElement.defaultProps = {
  count: 0,
};

export default IngredientsElement;
