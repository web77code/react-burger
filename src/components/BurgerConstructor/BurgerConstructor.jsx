import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className={styles.BurgerConstructor}>
        <p>BurgerConstructor</p>
      </section>
    );
  }
}

export default BurgerConstructor;