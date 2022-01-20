import React from "react";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngridients } from '../../utils/data.js';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import styles from './burger-elements.module.css';

function BurgerElements(props) {
  let fixedElements = [];
  let movableElements = [];

  const getData = id => allIngridients.find(el => el._id === id);
  
  props.elements.forEach((el) => {
    if(el.isLocked) {
      fixedElements.push(getData(el.id));
    } else {
      movableElements.push(getData(el.id));
    }
  });

  return (
      <div className={styles.container}>

        <div className={"mb-4 " + styles.element}>
            <ConstructorElement
              type='top'
              isLocked={fixedElements[0].isLocked}
              text={fixedElements[0].name}
              price={fixedElements[0].price}
              thumbnail={fixedElements[0].image}
            />
        </div>

        <DragAndDrop elements={movableElements} />

        <div className={"mt-4 " + styles.element}>
            <ConstructorElement
              type='bottom'
              isLocked={fixedElements[1].isLocked}
              text={fixedElements[1].name}
              price={fixedElements[1].price}
              thumbnail={fixedElements[1].image}
            />
        </div>
      </div>
  );
}

export default BurgerElements;
