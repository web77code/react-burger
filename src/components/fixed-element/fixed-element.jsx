import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './fixed-element.module.css';

const FixedElements = ({ type, positionDescribe }) => {

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun: bunId } = useSelector(state => state.construct);
  const { name, price, image } = ingredients.find((el) => el._id === bunId);

  const stylesFromPosition = (type === 'top') ? 'mb-4 pl-8 ' : 'mt-4 pl-8 ';

  return (
      <div className={stylesFromPosition + styles.element}>
        <ConstructorElement
          type={type}
          isLocked={true}
          text={`${name} (${positionDescribe})`}
          price={price}
          thumbnail={image}
        />
      </div>
  );
}

FixedElements.propTypes = {
  type: PropTypes.string.isRequired,
  positionDescribe: PropTypes.string.isRequired,
};

export default FixedElements;
