import { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-element.module.css';

const IngredientsElement = ({ id, name, price, image, openPopupWindow }) => {

  const { bun, items } = useSelector(state => state.construct);

  const [{ opacity }, ref] = useDrag({
    type: 'ingredients',
    item: { id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.3 : 1
    })
  });

  const count = useMemo(
    () => {
      let res = 0;

      res += id === bun ? 2 : 0;
      items.forEach(item => {
        res += id === item.id ? 1 : 0;
      });

      return res;
    },
    [id, bun, items]
  );

  return (
    <div ref={ref} className={styles.ingredient} id={id} onClick={(e) => openPopupWindow(e)} style={{ opacity }}>
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
  openPopupWindow: PropTypes.func.isRequired,
};

export default IngredientsElement;
