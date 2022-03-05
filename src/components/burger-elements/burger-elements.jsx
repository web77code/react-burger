import { useSelector, useDispatch } from "react-redux";
import { useDrop } from 'react-dnd';
import FixedElement from '../fixed-element/fixed-element';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import StartPrompting from '../start-prompting/start-prompting';
import { setBun, addItem } from '../../services/actions/burger-constructor';
import styles from './burger-elements.module.css';

const BurgerElements = () => {

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.ingredients.data);
  const { bun, items } = useSelector(state => state.construct);

  const addBurgerIngredient = id => {
    const { type } = ingredients.find((el) => el._id === id);

    if(type === 'bun') {
      dispatch(setBun(id));
    } else {
      if(bun.length > 0) 
        dispatch(addItem(id));
    }
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
      {
        bun.length > 0 
          ? <>
              <FixedElement type="top" positionDescribe="верх" />
              {items.length > 0 && <DragAndDrop />}
              <FixedElement type="bottom" positionDescribe="низ" /> 
            </>
          : <StartPrompting />
      }
    </div>
  );
}

export default BurgerElements;
