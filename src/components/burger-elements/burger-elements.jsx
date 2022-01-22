import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import styles from './burger-elements.module.css';

const BurgerElements = (props) => {
  BurgerElements.propTypes = {
    fixedElements: PropTypes.array,
    mobilityElements: PropTypes.array,
  };

  return (
    <div className={styles.container}>
      <div className={'mb-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="top"
          isLocked="true"
          text={props.fixedElements[0].name + '(верх)'}
          price={props.fixedElements[0].price}
          thumbnail={props.fixedElements[0].image}
        />
      </div>

      <DragAndDrop elements={props.mobilityElements} />

      <div className={'mt-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="bottom"
          isLocked={props.fixedElements[1].isLocked}
          text={props.fixedElements[1].name + '(низ)'}
          price={props.fixedElements[1].price}
          thumbnail={props.fixedElements[1].image}
        />
      </div>
    </div>
  );
};

export default BurgerElements;
