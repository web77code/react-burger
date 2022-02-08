import React from 'react';
import PropTypes from 'prop-types';
import { BASIC_TYPES } from '../../utils/constants.js';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsElement from '../ingridients-element/ingridients-element';
import { IngridientsContext } from '../../contexts/appContext';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = (props) => {

  const [current, setCurrent] = React.useState('one');
  const [types, setTypes] = React.useState([]);

  const { ingridients } = React.useContext(IngridientsContext);

  React.useEffect(() => {
    const arr = [];
    ingridients.data.forEach((el) => {
      if (!arr.includes(el.type)) {
        arr.push(el.type);
      }
    });
    setTypes(arr);
  }, [ingridients]);

  BurgerIngredients.propTypes = {
    openPopupWindow: PropTypes.func,
  };

  return (
    <section className={'mr-10 pt-10 ' + styles.BurgerIngredients}>
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

      <div className={'mt-10 ' + styles.ingredientsContainer}>
        {types.map((type, index) => {
          const ingredientsOneType = ingridients.data.filter((data) => data.type === type);

          return (
            <li key={index}>
              <h2 className="text text_type_main-medium">{BASIC_TYPES[type]}</h2>
              <div className={'pt-6 pr-2 pb-10 pl-4 ' + styles.ingredientsGroup}>
                {ingredientsOneType.map((ingredient, i) => {
                  
                  let count = undefined;
                  if (i === 0) count = 1;

                  return (
                    <IngridientsElement
                      key={ingredient._id}
                      id={ingredient._id}
                      name={ingredient.name}
                      price={ingredient.price}
                      image={ingredient.image}
                      count={count}
                      openPopupWindow={props.openPopupWindow}
                    />
                  );
                })}
              </div>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;
