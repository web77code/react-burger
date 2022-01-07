import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li><a href="#" className="text text_type_main-default">Конструктор</a></li>
            <li><a href="#" className={styles.link}>Лента заказов</a></li>
          </ul>
        </nav>
        <Logo />
        <a href="#" className={styles.link}>Личный кабинет</a>
      </header>
    );
  }
  
}

export default AppHeader;