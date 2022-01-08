import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <div className={styles.button + " pt-4 pr-5 pb-4 pl-5"}>
                <BurgerIcon type="primary" />
                <p className={styles.link + " text text_type_main-default ml-2"}>Конструктор</p>
              </div>
            </li>
            <li className="ml-2">
              <div className={styles.button + " pt-4 pr-5 pb-4 pl-5"}>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
              </div>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={styles.rightSide}>
          <div className={styles.button + " pt-4 pr-5 pb-4 pl-5"}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;