import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';

import styles from './app-header.module.css';

const AppHeader = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <HeaderButton 
                icon="BurgerIcon" 
                text="Конструктор" 
                url="/" 
              />
            </li>
            <li className="ml-2">
              <HeaderButton 
                icon="ListIcon" 
                text="Лента заказов" 
                url="/all-orders" 
              />
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={styles.rightSide}>
          <HeaderButton 
            icon="ProfileIcon" 
            text="Личный кабинет" 
            url="/profile" 
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
