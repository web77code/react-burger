import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { BASIC_TYPES } from '../../utils/constants.js';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsElement from '../ingredients-element/ingredients-element';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = (props) => {

  const [current, setCurrent] = React.useState('bun');
  const [types, setTypes] = React.useState([]);

  const ingredients = useSelector(state => state.ingredients.data);

  const typesDomRef = {
    bun: useRef(null),
    sauce: useRef(null),
    main: useRef(null)
  }
  const ingredientsRef = useRef(null);

  React.useEffect(() => {
    const arr = [];
    ingredients.forEach((el) => {
      if (!arr.includes(el.type)) {
        arr.push(el.type);
      }
    });
    setTypes(arr);
  }, [ingredients]);

  const handleTabClick = (value) => {
    setCurrent(value);
    ingredientsRef.current.scrollTop = typesDomRef[value].current.offsetTop;
  }

  const handleContainerScroll = (e) => {
    let currentTab = 'bun';

    for(let key in typesDomRef) {
      const currentContainerScroll = e.target.scrollTop;

      currentTab = (
        (Math.abs(currentContainerScroll - typesDomRef[currentTab].current.offsetTop)) > 
        (Math.abs(currentContainerScroll - typesDomRef[key].current.offsetTop)))
        ? key
        : currentTab ;
    }

    setCurrent(currentTab);
  }

  return (
    <section className={'mr-10 pt-10 ' + styles.BurgerIngredients}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
          Булки
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
          Начинки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
          Соусы
        </Tab>
        
      </div>

      <div className={'mt-10 ' + styles.ingredientsContainer} onScroll={handleContainerScroll} ref={ingredientsRef}>
        {types.map((type, index) => {
          const ingredientsOneType = ingredients.filter((data) => data.type === type);

          return (
            <li key={index}>
              <h2 className="text text_type_main-medium" ref={typesDomRef[type]}>{BASIC_TYPES[type]}</h2>
              <div className={'pt-6 pr-2 pb-10 pl-4 ' + styles.ingredientsGroup}>
                {ingredientsOneType.map((ingredient) => {
                  return (
                    <IngredientsElement
                      key={ingredient._id}
                      id={ingredient._id}
                      name={ingredient.name}
                      price={ingredient.price}
                      image={ingredient.image}
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
}

BurgerIngredients.propTypes = {
  openPopupWindow: PropTypes.func.isRequired,
};

export default BurgerIngredients;
