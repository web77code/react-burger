import React from "react";
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngridients } from '../../utils/data';
import styles from './BurgerConstructor.module.css';

function BurgerConstructor() {

  const [ state ] = React.useState([
    { _id: '60666c42cc7b410027a1a9b1', isLocked: true },
    { _id: '60666c42cc7b410027a1a9b9', isLocked: false },
    { _id: '60666c42cc7b410027a1a9b4', isLocked: false },
    { _id: '60666c42cc7b410027a1a9bc', isLocked: false },
    { _id: '60666c42cc7b410027a1a9bb', isLocked: false },
    { _id: '60666c42cc7b410027a1a9bb', isLocked: false },
    { _id: '60666c42cc7b410027a1a9b1', isLocked: true },
  ]);

  const [ data, setData ] = React.useState([]);

  function getData() {
    const arr=[];

    state.forEach((el) => {
      const obj = allIngridients.find((i) => i._id === el._id);
      arr.push(obj);
    });

    setData(arr);
  }

  React.useEffect(() => {
    getData();
  }, [state]);

  return (
    <section className={styles.BurgerConstructor}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {
          
          data.map((item, index) => {
            return (
              <>
                <DragIcon type="primary" />
                <ConstructorElement
                  key={index}
                  type="top"
                  isLocked={item.isLocked}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </>
              
            );
          })
        }
      </div>
    </section>
  );
}

export default BurgerConstructor;
