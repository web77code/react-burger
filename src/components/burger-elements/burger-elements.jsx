import React from "react";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngridients } from '../../utils/data.js';
import styles from './burger-elements.module.css';

function BurgerElements(props) {

  return (
      <div className={styles.container}>
        {
          props.elements.map(({ id, isLocked }, index) => {
            const ingridient = allIngridients.find(el => el._id === id);

            return (
              <div className={"mb-4 " + styles.element}>
                { !isLocked && <DragIcon type="primary" /> }
                <ConstructorElement
                  isLocked={isLocked}
                  text={ingridient.name}
                  price={ingridient.price}
                  thumbnail={ingridient.image}
                  key={index}
                />
              </div>
            )
          }) 
        }
      </div>
  );
}

export default BurgerElements;
