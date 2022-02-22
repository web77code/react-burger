import { useSelector } from "react-redux";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import styles from './burger-elements.module.css';

const BurgerElements = () => {

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);

  const bunData = ingredients.find((el) => el._id === bun);
  const itemsData = items.map((item) => {
    return ingredients.find((el) => el._id === item.id);
  });

  return (
    <div className={styles.container}>
      <div className={'mb-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="top"
          isLocked="true"
          text={bunData.name + '(верх)'}
          price={bunData.price}
          thumbnail={bunData.image}
        />
      </div>

      <DragAndDrop elements={itemsData} />

      <div className={'mt-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="bottom"
          isLocked="true"
          text={bunData.name + '(низ)'}
          price={bunData.price}
          thumbnail={bunData.image}
        />
      </div>
    </div>
  );
}

export default BurgerElements;
