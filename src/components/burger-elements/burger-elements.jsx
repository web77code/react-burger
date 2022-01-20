import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngridients } from '../../utils/data.js';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import styles from './burger-elements.module.css';

const BurgerElements = props => {

  BurgerElements.propTypes = {
    fixedElements: PropTypes.array,
    mobilityElements: PropTypes.array
  };

  const getData = id => allIngridients.find((el) => el._id === id);

  const fixed = props.fixedElements.map(el => getData(el.id));
  const mobility = props.mobilityElements.map(el => getData(el.id));

  return (
    <div className={styles.container}>
      <div className={'mb-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="top"
          isLocked={fixed[0].isLocked}
          text={fixed[0].name}
          price={fixed[0].price}
          thumbnail={fixed[0].image}
        />
      </div>

      <DragAndDrop elements={mobility} />

      <div className={'mt-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="bottom"
          isLocked={fixed[1].isLocked}
          text={fixed[1].name}
          price={fixed[1].price}
          thumbnail={fixed[1].image}
        />
      </div>
    </div>
  );
};

export default BurgerElements;
