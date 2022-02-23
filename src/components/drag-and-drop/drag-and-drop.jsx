import { useSelector } from "react-redux";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './drag-and-drop.module.css';

const DragAndDrop = () => {

  const ingredients = useSelector(state => state.ingredients.data);
  const { items } = useSelector(state => state.construct);

  const itemsData = items.map((item) => {
    return ingredients.find((el) => el._id === item);
  });

  return (
    <div className={styles.container}>
      {
        itemsData.map(({ name, price, image , isLocked }, index) => {
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
