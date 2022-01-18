import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsElement from '../ingridients-element/ingridients-element';

import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState('one')

    return (
      <section className={"mr-10 pt-10 " + styles.BurgerIngredients}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={"mt-10 " + styles.ingredientsContainer}>

          <h2 className="text text_type_main-medium">Булки</h2>

          <div className={"pt-6 pr-2 pb-10 pl-4 " + styles.ingredientsGroup}>
            <IngridientsElement name="Краторная булка N-200i" price="20" image="https://code.s3.yandex.net/react/code/bun-02.png" />
            <IngridientsElement name="Флюоресцентная булка R2-D3" price="20" image="https://code.s3.yandex.net/react/code/bun-01.png" />
          </div>
          
          <h2 className="text text_type_main-medium">Соусы</h2> 

          <div className={"pt-6 pr-2 pb-10 pl-4 " + styles.ingredientsGroup}>
            <IngridientsElement name="Краторная булка N-200i" price="20" image="https://code.s3.yandex.net/react/code/bun-02.png" />
            <IngridientsElement name="Флюоресцентная булка R2-D3" price="20" image="https://code.s3.yandex.net/react/code/bun-01.png" />
            <IngridientsElement name="Краторная булка N-200i" price="20" image="https://code.s3.yandex.net/react/code/bun-02.png" />
            <IngridientsElement name="Флюоресцентная булка R2-D3" price="20" image="https://code.s3.yandex.net/react/code/bun-01.png" />
          </div>

        </div>
        
      </section>
    );
  
}

export default BurgerIngredients;