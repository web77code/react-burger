import React from 'react';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';

const BurgerIngredients = () => {
  const stylesscroll = {
    menuList: (base) => ({
      ...base,
  
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      }
    })
  }

  const [current, setCurrent] = React.useState('one')

    return (
      <section className={"mr-10 " + styles.BurgerIngredients} id="#el">
        <h1>Соберите бургер</h1>

        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            One
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Two
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Three
          </Tab>
        </div>

        <h2>Булки</h2>
          <div className={styles.ingredientsContainer}>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-02.png" className={styles.image} alt="Краторная булка N-200i" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Краторная булка N-200i</h3>
            </div>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-01.png" className={styles.image} alt="Флюоресцентная булка R2-D3" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Флюоресцентная булка R2-D3</h3>
            </div>
          </div>
          
        <h2>Соусы</h2> 
          <div className={styles.ingredientsContainer}>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-02.png" className={styles.image} alt="Краторная булка N-200i" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Краторная булка N-200i</h3>
            </div>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-01.png" className={styles.image} alt="Флюоресцентная булка R2-D3" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Флюоресцентная булка R2-D3</h3>
            </div>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-02.png" className={styles.image} alt="Краторная булка N-200i" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Краторная булка N-200i</h3>
            </div>
            <div className="ingridient">
              <img src="https://code.s3.yandex.net/react/code/bun-01.png" className={styles.image} alt="Флюоресцентная булка R2-D3" />
              <div className={styles.price}>20</div>
              <h3 className={styles.name}>Флюоресцентная булка R2-D3</h3>
            </div>
          </div>
      </section>
    );
  
}

export default BurgerIngredients;