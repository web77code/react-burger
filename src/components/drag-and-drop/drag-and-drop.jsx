import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './drag-and-drop.module.css';

const DragAndDrop = props => {

  DragAndDrop.propTypes = {
    elements: PropTypes.object
  };

  return (
    <div className={styles.container}>
      {
        props.elements.map(({ name, price, image , isLocked }, index) => {
          return (
            <li className={styles.element} key={index}>
              { !isLocked && <DragIcon type="primary" /> }
              <ConstructorElement
                isLocked={isLocked}
                text={name}
                price={price}
                thumbnail={image}
              />
            </li>
          )
        }) 
      }
    </div>
  );
}

export default DragAndDrop;
