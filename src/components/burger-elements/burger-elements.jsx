import { useSelector, useDispatch } from "react-redux";
import { useDrop } from 'react-dnd';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import { SET_BUN, ADD_ITEM } from '../../services/actions/burger-constructor';
import styles from './burger-elements.module.css';

const BurgerElements = () => {

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);

  const bunData = ingredients.find((el) => el._id === bun);

  const addBurgerIngredient = (id) => {
    const itemType = ingredients.find((el) => el._id === id).type;
    
    itemType === 'bun'
      ? dispatch({
        type: SET_BUN,
        payload: id
      })
      : dispatch({
        type: ADD_ITEM,
        payload: id
      });
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredients',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      addBurgerIngredient(item.id)
    }
  });

  return (
    <div ref={dropTarget} className={styles.container}>
      <div className={'mb-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunData.name + ' (верх)'}
          price={bunData.price}
          thumbnail={bunData.image}
        />
      </div>

      {items.length > 0 && <DragAndDrop />}

      <div className={'mt-4 pl-8 ' + styles.element}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunData.name + ' (низ)'}
          price={bunData.price}
          thumbnail={bunData.image}
        />
      </div>
    </div>
  );
}

export default BurgerElements;
