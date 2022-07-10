import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './dnd-element.module.css';

const DndElement = (props) => {

  const { name, price, image, uid, findCard, moveCard, onDelete } = props;
  
  const originalIndex = findCard(uid).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'currentBurger',
      item: { uid, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { uid: ind, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(ind, originalIndex);
        }
      },
    }),
    [uid, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'currentBurger',
      hover({ uid: draggedId }) {
        if (draggedId !== uid) {
          const { index: overIndex } = findCard(uid);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  const handleClose = () => {
    onDelete(uid);
  };

  return (
    <div className={styles.element} ref={(node) => drag(drop(node))} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleClose}
      />
    </div>
  );
};

DndElement.propTypes = {
  name: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  findCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DndElement;
