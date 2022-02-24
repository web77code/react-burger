import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './dnd-element.module.css';

const DndElement = ({ name, price, image, orderIndex, findCard, moveCard, onDelete }) => {
  const originalIndex = findCard(orderIndex).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'currentBurger',
      item: { orderIndex, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { orderIndex: ind, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(ind, originalIndex);
        }
      },
    }),
    [orderIndex, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'currentBurger',
      hover({ orderIndex: draggedId }) {
        if (draggedId !== orderIndex) {
          const { index: overIndex } = findCard(orderIndex);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  const handleClose = () => {
    onDelete(orderIndex);
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

export default DndElement;
