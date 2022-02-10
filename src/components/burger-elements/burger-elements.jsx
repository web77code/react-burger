import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import styles from './burger-elements.module.css';

const BurgerElements = (props) => {
  
  return (
    <div className={styles.container}>
      <div className={'mb-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="top"
          isLocked="true"
          text={props.fixedElements.name + '(верх)'}
          price={props.fixedElements.price}
          thumbnail={props.fixedElements.image}
        />
      </div>

      <DragAndDrop elements={props.mobilityElements} />

      <div className={'mt-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="bottom"
          isLocked="true"
          text={props.fixedElements.name + '(низ)'}
          price={props.fixedElements.price}
          thumbnail={props.fixedElements.image}
        />
      </div>
    </div>
  );
}

BurgerElements.propTypes = {
  fixedElements: PropTypes.shape({
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
  }),
  mobilityElements: PropTypes.arrayOf(PropTypes.shape({
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
};

export default BurgerElements;
