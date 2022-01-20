import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './drag-and-drop.module.css';

function DragAndDrop(props) {
  
  return (
    <div className={styles.container}>
      {
        props.elements.map(({ name, price, image , isLocked }, index) => {
          return (
            <div className={styles.element}>
              { !isLocked && <DragIcon type="primary" /> }
              <ConstructorElement
                isLocked={isLocked}
                text={name}
                price={price}
                thumbnail={image}
                key={index}
              />
            </div>
          )
        }) 
      }
    </div>
    
  );
}

export default DragAndDrop;